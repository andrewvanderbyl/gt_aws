package za.co.runapp.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import za.co.runapp.entity.Event;
import za.co.runapp.entity.User;
import za.co.runapp.entity.UserEvent;
import za.co.runapp.entity.UserEventKey;
import za.co.runapp.repository.EventRepository;
import za.co.runapp.repository.UserEventRepository;
import za.co.runapp.repository.UserRepository;
import za.co.runapp.rest.dto.EventDto;
import za.co.runapp.rest.dto.PageableDto;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Slf4j
@Service
@AllArgsConstructor
public class EventsService {

    private final EventRepository eventRepository;
    private final UserRepository userRepository;
    private final UserEventRepository userEventRepository;

    public EventDto createEvent(final EventDto eventDto) {

        Event toPersist = Event.builder()
                .name(eventDto.getName())
                .detail(eventDto.getDetail())
                .date(LocalDateTime.parse(eventDto.getDate(), DateTimeFormatter.ISO_DATE_TIME))
                .build();

        Event persisted = eventRepository.saveAndFlush(toPersist);

        return persisted.toEventDto();
    }

    public void registerUser(final String eventId, final String userId) {

        User user = userRepository.getReferenceById(userId);
        Event event = eventRepository.getReferenceById(eventId);

        UserEvent userEvent = UserEvent.builder()
                .userEventKey(UserEventKey.builder()
                        .eventId(eventId)
                        .userId(userId)
                        .build())
                .status(Boolean.TRUE)
                .user(user)
                .event(event)
                .build();

        userEventRepository.saveAndFlush(userEvent);
    }

    public PageableDto<EventDto> getEvents(final String eventType, final int page, final int size) {

        Page<Event> events;
        if (eventType.equals("future")) {
            events = eventRepository.findByDateGreaterThanEqual(LocalDateTime.now(), PageRequest.of(page, size));
        } else {
            events = eventRepository.findByDateLessThan(LocalDateTime.now(), PageRequest.of(page, size));

        }

        List<EventDto> eventDtoList = events.stream()
                .map(Event::toEventDto)
                .toList();

        return PageableDto.<EventDto>builder()
                .data(eventDtoList)
                .totalElements(events.getTotalElements())
                .elementsPerPage(events.getPageable().getPageSize())
                .currentPageNumber(events.getPageable().getPageNumber())
                .totalPages(events.getTotalPages())
                .build();
    }

    public PageableDto<EventDto> getEvents(final String userId, final PageableDto pageableDto) {

        User user = userRepository.getReferenceById(userId);
        Page<EventDto> events = userEventRepository.findEventByUser(user,
                PageRequest.of(pageableDto.getCurrentPageNumber(), pageableDto.getElementsPerPage()));

        return PageableDto.<EventDto>builder()
                .data(events.getContent())
                .totalElements(events.getTotalElements())
                .elementsPerPage(events.getPageable().getPageSize())
                .currentPageNumber(events.getPageable().getPageNumber())
                .totalPages(events.getTotalPages())
                .build();
    }
}
