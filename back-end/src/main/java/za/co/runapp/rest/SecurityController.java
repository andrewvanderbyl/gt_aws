package za.co.runapp.rest;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import za.co.runapp.rest.dto.UserDto;
import za.co.runapp.service.SecurityService;

@Slf4j
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/security")
@AllArgsConstructor
public class SecurityController {

    private final SecurityService securityService;

    @PostMapping("/authenticate")
    public Mono<ResponseEntity<UserDto>> authenticateUser(@RequestBody final UserDto userDto) {

        UserDto authenticatedUser = securityService.authenticate(userDto);
        return Mono.just(ResponseEntity.ok(authenticatedUser));
    }
}
