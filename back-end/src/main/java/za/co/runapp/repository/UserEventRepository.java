package za.co.runapp.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import za.co.runapp.entity.Event;
import za.co.runapp.entity.User;
import za.co.runapp.entity.UserEvent;
import za.co.runapp.rest.dto.EventDto;

public interface UserEventRepository extends JpaRepository<UserEvent, String> {

    @Query("SELECT new za.co.runapp.rest.dto.EventDto(ue.event.id, ue.event.name, ue.event.detail, ue.event.date) from UserEvent ue where ue.user = :user")
    Page<EventDto> findEventByUser(User user, Pageable pageable);
}
