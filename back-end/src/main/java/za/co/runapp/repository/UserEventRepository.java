package za.co.runapp.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import za.co.runapp.entity.Event;
import za.co.runapp.entity.User;
import za.co.runapp.entity.UserEvent;
import za.co.runapp.rest.dto.EventDto;

import java.time.LocalDateTime;

public interface UserEventRepository extends JpaRepository<UserEvent, String> {

    @Query("""
        SELECT new za.co.runapp.rest.dto.EventDto(ue.event.id, ue.event.name, ue.event.detail, ue.event.date) 
        from UserEvent ue 
        where ue.user = :user
        ORDER BY ue.event.date DESC
    """)
    Page<EventDto> findEventByUser(User user, Pageable pageable);

    @Query("""
        SELECT new za.co.runapp.rest.dto.EventDto(e.id, e.name, e.detail, e.date)
        FROM Event e
        WHERE e NOT IN (
            SELECT ue.event
            FROM UserEvent ue where ue.user = :user
        )
        AND e.date >= :date
        ORDER BY e.date DESC
    """)
    Page<EventDto> findUnsubscribedUpcomingEventsForUser(User user, LocalDateTime date, Pageable pageable);

    @Query("""
        SELECT new za.co.runapp.rest.dto.EventDto(ue.event.id, ue.event.name, ue.event.detail, ue.event.date)
        from UserEvent ue 
        where ue.user = :user
        and ue.event.date >= :date
        ORDER BY ue.event.date DESC
    """)
    Page<EventDto> findSubscribedUpcomingEventsForUser(User user, LocalDateTime date, Pageable pageable);

    @Query("""
        SELECT new za.co.runapp.rest.dto.EventDto(ue.event.id, ue.event.name, ue.event.detail, ue.event.date)
        from UserEvent ue 
        where ue.user = :user
        and ue.event.date < :date
        ORDER BY ue.event.date DESC
    """)
    Page<EventDto> findPastSubscribedEventsForUser(User user, LocalDateTime date, Pageable pageable);
}