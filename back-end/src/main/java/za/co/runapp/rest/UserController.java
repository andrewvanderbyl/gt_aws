package za.co.runapp.rest;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import za.co.runapp.exception.BusinessException;
import za.co.runapp.rest.dto.AsaDto;
import za.co.runapp.rest.dto.ClubDto;
import za.co.runapp.rest.dto.EventDto;
import za.co.runapp.rest.dto.LoginResponse;
import za.co.runapp.rest.dto.PageableDto;
import za.co.runapp.rest.dto.UserDto;
import za.co.runapp.rest.dto.UserRaceDto;
import za.co.runapp.rest.dto.UserTagDto;
import za.co.runapp.service.EventsService;
import za.co.runapp.service.RegistrationService;
import za.co.runapp.service.UserService;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final EventsService eventsService;
    private final RegistrationService registrationService;

    @PostMapping
    public Mono<ResponseEntity> createUser(
            @RequestBody final UserDto userDto
    ) throws BusinessException {

        log.info("Received {}", userDto);

        String jwtToken = userService.createUser(userDto);
        return Mono.just(ResponseEntity.ok(new LoginResponse(jwtToken)));
    }

    @PutMapping
    public Mono<ResponseEntity> updateUserProfile(
            @RequestBody final UserDto userDto,
            @RequestHeader("userId") final String userId) throws BusinessException {
        log.info("Updating profile {}", userDto);

        UserDto user = userService.updateUser(userId, userDto);
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
        } catch (BusinessException e) {
            log.error("Error obtaining user", e);
            return Mono.just(ResponseEntity.badRequest().build());
        }
    }

    @GetMapping("/events")
    public Mono<ResponseEntity<PageableDto<EventDto>>> getEventsForUser(
            @RequestBody final PageableDto pageableDto, @RequestHeader("userId") final String userId) {

        PageableDto<EventDto> events = eventsService.getEvents(userId, pageableDto);
        return Mono.just(ResponseEntity.ok(events));
    }

    @GetMapping("/clubs")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public Mono<ResponseEntity<PageableDto<ClubDto>>> getClubsForUser(
            @RequestParam("page") final int page,
            @RequestParam("size") final int size,
            final Authentication authentication) {

        PageableDto<ClubDto> clubs = userService.getClubsForUser((String) authentication.getPrincipal(), page, size);
        return Mono.just(ResponseEntity.ok(clubs));
    }

    @GetMapping("/races")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public Mono<ResponseEntity<PageableDto<UserRaceDto>>> getRacesForUser(
            @RequestParam("page") final int page,
            @RequestParam("size") final int size,
            final Authentication authentication) {

        PageableDto<UserRaceDto> userRaces = userService.getRacesForUser((String) authentication.getPrincipal(), page, size);
        return Mono.just(ResponseEntity.ok(userRaces));
    }

    @GetMapping("/asas")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public Mono<ResponseEntity<PageableDto<AsaDto>>> getAsaForUser(
            @RequestParam("page") final int page,
            @RequestParam("size") final int size,
            final Authentication authentication) {

        PageableDto<AsaDto> userAsas = userService.getAsaForUser((String) authentication.getPrincipal(), page, size);
        return Mono.just(ResponseEntity.ok(userAsas));
    }

    @GetMapping("/tags")
    public Mono<ResponseEntity<PageableDto<UserTagDto>>> getTagsForUser(
            @RequestParam("page") final int page,
            @RequestParam("size") final int size,
            @RequestHeader("userId") final String userId) {

        PageableDto<UserTagDto> tags = registrationService.fetchTagsForUser(userId, page, size);
        return Mono.just(ResponseEntity.ok(tags));
    }
}
