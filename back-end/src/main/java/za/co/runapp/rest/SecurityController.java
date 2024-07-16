package za.co.runapp.rest;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;
import za.co.runapp.exception.BusinessException;
import za.co.runapp.rest.dto.LoginResponse;
import za.co.runapp.rest.dto.UserDto;
import za.co.runapp.service.SecurityService;

@Slf4j
@RestController
@RequestMapping("/security")
@AllArgsConstructor
public class SecurityController {

    private final SecurityService securityService;

    @PostMapping("/authenticate")
    public Mono<ResponseEntity<LoginResponse>> authenticateUser(@RequestBody final UserDto userDto) throws BusinessException {

        return Mono.justOrEmpty(userDto)
                .map(userDetail -> {
                    try {
                        String token = securityService.authenticate(userDetail);
                        return ResponseEntity.ok(new LoginResponse(token));
                    } catch (BusinessException e) {
                        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
                    }
                })
                .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.UNAUTHORIZED)));
    }
}
