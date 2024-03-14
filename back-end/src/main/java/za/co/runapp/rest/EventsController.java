package za.co.runapp.rest;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import za.co.runapp.rest.dto.EventDto;
import za.co.runapp.rest.dto.PageableDto;
import za.co.runapp.service.EventsService;

import java.util.List;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/events")
public class EventsController {

    private final EventsService eventsService;

    @PostMapping
    public Mono<ResponseEntity<EventDto>> createEvent(@RequestBody final EventDto eventDto) {

        EventDto persistedEventDto = eventsService.createEvent(eventDto);
        return Mono.just(ResponseEntity.ok(persistedEventDto));
    }

    @GetMapping
    public Mono<ResponseEntity<PageableDto<EventDto>>> getEvents(
            @RequestBody final PageableDto pageableDto) {

        PageableDto<EventDto> events = eventsService.getEvents(pageableDto);
        return Mono.just(ResponseEntity.ok(events));
    }

    @GetMapping("/")
    public Mono<ResponseEntity<PageableDto<EventDto>>> getEventsForUser(
            @RequestBody final PageableDto pageableDto, @RequestHeader("userId") final String userId) {

        PageableDto<EventDto> events = eventsService.getEvents(userId, pageableDto);
        return Mono.just(ResponseEntity.ok(events));
    }

    @PostMapping("/{eventId}/register")
    public Mono<ResponseEntity> registerEventForUser(
            @PathVariable("eventId") final String eventId,
            @RequestHeader("userId") final String userId) {

        eventsService.registerUser(eventId, userId);
        return Mono.just(ResponseEntity.ok().build());
    }
}
