package za.co.runapp.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import za.co.runapp.entity.User;
import za.co.runapp.exception.BusinessException;
import za.co.runapp.repository.UserRepository;
import za.co.runapp.rest.dto.UserDto;

import java.util.Optional;

@Slf4j
@Service
@AllArgsConstructor
public class SecurityService {

    private final UserRepository userRepository;
    private final TokenService tokenService;
    private final PasswordEncoder passwordEncoder;

    public String authenticate(UserDto userDto) throws BusinessException {

        Optional<User> userFromDB = userRepository.findByUsername(userDto.username());
        if (userFromDB.isEmpty()
                || !passwordEncoder.matches(userDto.password(), userFromDB.get().getPassword())) {
            throw new BusinessException("Invalid user");
        }

        return tokenService.generateToken(userFromDB.get());
    }
}
