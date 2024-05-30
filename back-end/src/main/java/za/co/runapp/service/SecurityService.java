package za.co.runapp.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import za.co.runapp.entity.User;
import za.co.runapp.exception.BusinessException;
import za.co.runapp.repository.UserRepository;
import za.co.runapp.rest.dto.UserDto;

@Slf4j
@Service
@AllArgsConstructor
public class SecurityService {

    private final UserRepository userRepository;

    public UserDto authenticate(UserDto userDto) throws BusinessException {

        User authenticatedUser = userRepository.findByUsernameAndPassword(userDto.username(), userDto.password());
        if (authenticatedUser == null) {
            throw new BusinessException("Invalid user");
        }
        return authenticatedUser.toUserDto();
    }
}
