package za.co.runapp.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import za.co.runapp.entity.Event;

public interface EventRepository extends PagingAndSortingRepository<Event, String> {
}
