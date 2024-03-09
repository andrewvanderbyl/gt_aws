package za.co.runapp.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import za.co.runapp.entity.User;
import za.co.runapp.exception.UserNotFoundException;
import za.co.runapp.repository.UserRepository;
import za.co.runapp.rest.dto.UserDto;

import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    public UserDto createUser(final UserDto userDto) {

        User user = User.builder()
                .firstName(userDto.firstName())
                .lastName(userDto.lastName())
                .password(userDto.password())
                .username(userDto.username())
                .email(userDto.email())
                .contact(userDto.contact())
                .build();

        User createdUser = userRepository.saveAndFlush(user);

        return UserDto.builder()
                .id(createdUser.getId())
                .firstName(createdUser.getFirstName())
                .lastName(createdUser.getLastName())
                .contact(createdUser.getContact())
                .username(createdUser.getUsername())
                .password(createdUser.getPassword())
                .email(createdUser.getEmail())
                .build();
    }

    public UserDto fetchUserById(final String userId) throws UserNotFoundException {

        Optional<User> userOpt = userRepository.findById(userId);
        if (userOpt.isEmpty()) {
            throw new UserNotFoundException(String.format("No user found by id: %s", userId));
        }

        final User user = userOpt.get();
        return UserDto.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .contact(user.getContact())
                .username(user.getUsername())
                .password(user.getPassword())
                .email(user.getEmail())
                .build();
    }
}
