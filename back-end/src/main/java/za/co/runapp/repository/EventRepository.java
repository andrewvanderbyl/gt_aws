package za.co.runapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.runapp.entity.Event;

public interface EventRepository extends JpaRepository<Event, String> {
}
