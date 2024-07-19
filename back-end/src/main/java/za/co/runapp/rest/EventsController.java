package za.co.runapp.rest;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import za.co.runapp.rest.dto.EventDto;
import za.co.runapp.rest.dto.EventFilterType;
import za.co.runapp.rest.dto.PageableDto;
import za.co.runapp.service.EventsService;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/events")
public class EventsController {

    private final EventsService eventsService;

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public Mono<ResponseEntity<EventDto>> createEvent(@RequestBody final EventDto eventDto) {

        EventDto persistedEventDto = eventsService.createEvent(eventDto);
        return Mono.just(ResponseEntity.ok(persistedEventDto));
    }

    @GetMapping("{type}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Mono<ResponseEntity<PageableDto<EventDto>>> getEvents(
            @PathVariable("type") final String eventType,
            @RequestParam("page") final int page,
            @RequestParam("size") final int size) {

        PageableDto<EventDto> events = eventsService.getEvents(eventType, page, size);
        return Mono.just(ResponseEntity.ok(events));
    }

    @PostMapping("/{eventId}/register")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public Mono<ResponseEntity> registerEventForUser(
            @PathVariable("eventId") final String eventId,
            final Authentication authentication) {

        eventsService.registerUser(eventId, (String) authentication.getPrincipal());
        return Mono.just(ResponseEntity.ok().build());
    }

    @GetMapping("/users/{type}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public Mono<ResponseEntity<PageableDto<EventDto>>> getEvents(
            @PathVariable("type") final EventFilterType eventType,
            @RequestParam("page") final int page,
            @RequestParam("size") final int size,
            final Authentication authentication) {

        PageableDto<EventDto> events = eventsService.getEventsForUser(eventType,
                (String) authentication.getPrincipal(),
                page,
                size);
        return Mono.just(ResponseEntity.ok(events));
    }
}
