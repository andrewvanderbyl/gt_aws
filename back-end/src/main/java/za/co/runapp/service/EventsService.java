package za.co.runapp.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
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

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        Event toPersist = Event.builder()
                .name(eventDto.getName())
                .detail(eventDto.getDetail())
                .date(LocalDateTime.of(LocalDate.parse(eventDto.getDate(), formatter), LocalTime.of(0, 0)))
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

    public PageableDto<EventDto> getEvents(final PageableDto pageableDto) {

        Page<Event> events = eventRepository.findAll(
                PageRequest.of(pageableDto.getCurrentPageNumber(), pageableDto.getElementsPerPage()));

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

//        List<EventDto> eventDtoList = events.stream()
//                .map(userEvent -> userEvent.toEventDto())
//                .toList();

        return PageableDto.<EventDto>builder()
                .data(events.getContent())
                .totalElements(events.getTotalElements())
                .elementsPerPage(events.getPageable().getPageSize())
                .currentPageNumber(events.getPageable().getPageNumber())
                .totalPages(events.getTotalPages())
                .build();
    }
}
