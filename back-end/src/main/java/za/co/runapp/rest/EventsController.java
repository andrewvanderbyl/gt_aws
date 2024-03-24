package za.co.runapp.rest;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import za.co.runapp.rest.dto.PageableDto;
import za.co.runapp.service.EventsService;

import java.util.List;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/events")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EventsController {

    private final EventsService eventsService;

    @PostMapping
    public Mono<ResponseEntity<EventDto>> createEvent(@RequestBody final EventDto eventDto) {

        EventDto persistedEventDto = eventsService.createEvent(eventDto);
        return Mono.just(ResponseEntity.ok(persistedEventDto));
    }

    @GetMapping("{type}")
    public Mono<ResponseEntity<PageableDto<EventDto>>> getEvents(
            @PathVariable("type") final String eventType,
            @RequestParam("page") final int page,
            @RequestParam("size") final int size) {

        PageableDto<EventDto> events = eventsService.getEvents(eventType, page, size);
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
