package za.co.runapp.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import za.co.runapp.config.ApplicationProperties;
import za.co.runapp.entity.Role;
import za.co.runapp.entity.User;
import za.co.runapp.repository.RoleRepository;
import za.co.runapp.repository.UserRepository;

import javax.crypto.SecretKey;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TokenService {

    private final ApplicationProperties applicationProperties;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public String generateToken(final User user) {
        List<Role> roles = roleRepository.findByUsers(user);
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", user.getId());
        List<String> rolesList = roles.stream()
                .map(Role::getName)
                .collect(Collectors.toList());
        claims.put("roles", rolesList);
        return createToken(claims, user.getUsername());
    }

    public boolean isTokenExpired(String token) {
        return extractClaim(token, Claims::getExpiration)
                .before(Date.from(Instant.now()));
    }

    public String extractUserId(String token) {
        return extractClaim(token, claims -> claims.get("userId", String.class));
    }

    public List<String> extractRoles(String token) {
        return extractClaim(token, claims -> claims.get("roles", List.class));
    }

    public boolean validateToken(final String token) {
        final String userId = extractClaim(token, claims -> claims.get("userId", String.class));
        return userRepository.existsById(userId) && !isTokenExpired(token);
    }

    private <T> T extractClaim(String jwt, Function<Claims, T> claimResolver) {
        Claims claims = extractAllClaims(jwt);
        return claimResolver.apply(claims);
    }

    private Claims extractAllClaims(String jwt) {
        return Jwts.parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(jwt)
                .getPayload();
    }

    private String createToken(final Map<String, Object> claims, final String username) {
        return Jwts.builder()
                .claims(claims)
                .subject(username)
                .issuedAt(Date.from(Instant.now()))
                .expiration(Date.from(Instant.now().plus(1, ChronoUnit.HOURS)))
                .signWith(getSigningKey())
                .compact();
    }

    private SecretKey getSigningKey() {
        byte[] bytes = Decoders.BASE64.decode(applicationProperties.getJwt().getSignKey());
        return Keys.hmacShaKeyFor(bytes);
    }
}
