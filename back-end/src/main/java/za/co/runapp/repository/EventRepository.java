package za.co.runapp.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import za.co.runapp.entity.Event;

import java.time.LocalDateTime;

public interface EventRepository extends JpaRepository<Event, String> {

    Page<Event> findByDateGreaterThanEqual(LocalDateTime now, Pageable pageable);
    Page<Event> findByDateLessThan(LocalDateTime now, Pageable pageable);

}
