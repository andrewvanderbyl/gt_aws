package za.co.runapp.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;
import za.co.runapp.service.TokenService;

import java.util.List;
import java.util.stream.Collectors;

@Lazy
@Slf4j
@Component
@RequiredArgsConstructor
public class JWTAuthenticationManager implements ReactiveAuthenticationManager {

    private final TokenService tokenService;

    @Override
    public Mono<Authentication> authenticate(Authentication authentication) {
        final String token = (String) authentication.getCredentials();
        if (tokenService.validateToken(token)) {
            List<String> roles = tokenService.extractRoles(token);
            List<SimpleGrantedAuthority> authorities = roles.stream()
                    .map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toList());
            String userId = tokenService.extractUserId(token);
            UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userId,
                    userId,
                    authorities);
            //SecurityContextHolder.getContext().setAuthentication(auth);
            return Mono.just(auth);
        } else {
            return Mono.empty();
        }
    }
}
