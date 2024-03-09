package za.co.runapp.rest;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import za.co.runapp.exception.UserNotFoundException;
import za.co.runapp.rest.dto.UserDto;
import za.co.runapp.service.UserService;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @PostMapping
    public Mono<ResponseEntity> createUser(
            @RequestBody final UserDto userDto
    ) {
        log.info("Received {}", userDto);

        UserDto user = userService.createUser(userDto);
        return Mono.just(ResponseEntity.ok(user));
    }

    @GetMapping("/{id}")
    public Mono<ResponseEntity<UserDto>> getUserById(
            @PathVariable("id") final String userId
    ) {
        log.info("Received {}", userId);

        try {
            UserDto userDto = userService.fetchUserById(userId);
            return Mono.just(ResponseEntity.ok(userDto));
        } catch (UserNotFoundException e) {
            log.error("Error obtaining user", e);
            return Mono.just(ResponseEntity.badRequest().build());
        }
    }
}
