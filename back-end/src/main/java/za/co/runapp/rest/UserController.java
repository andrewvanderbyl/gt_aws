package za.co.runapp.rest;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import za.co.runapp.exception.EntityNotFoundException;
import za.co.runapp.rest.dto.AsaDto;
import za.co.runapp.rest.dto.ClubDto;
import za.co.runapp.rest.dto.EventDto;
import za.co.runapp.rest.dto.PageableDto;
import za.co.runapp.rest.dto.RaceDto;
import za.co.runapp.rest.dto.UserDto;
import za.co.runapp.service.ClubService;
import za.co.runapp.service.EventsService;
import za.co.runapp.service.UserService;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final EventsService eventsService;
    private final ClubService clubService;

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
        } catch (EntityNotFoundException e) {
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
    public Mono<ResponseEntity<PageableDto<ClubDto>>> getClubsForUser(
            @RequestBody final PageableDto pageableDto, @RequestHeader("userId") final String userId) {

        PageableDto<ClubDto> clubs = userService.getClubsForUser(userId, pageableDto);
        return Mono.just(ResponseEntity.ok(clubs));
    }

    @GetMapping("/races")
    public Mono<ResponseEntity<PageableDto<RaceDto>>> getRacesForUser(
            @RequestBody final PageableDto pageableDto, @RequestHeader("userId") final String userId) {

        PageableDto<RaceDto> races = userService.getRacesForUser(userId, pageableDto);
        return Mono.just(ResponseEntity.ok(races));
    }

    @GetMapping("/asa")
    public Mono<ResponseEntity<AsaDto>> getAsaForUser(@RequestHeader("userId") final String userId) {

        AsaDto asa = userService.getAsaForUser(userId);
        return Mono.just(ResponseEntity.ok(asa));
    }
}
