package za.co.runapp.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import za.co.runapp.entity.UserEvent;

public interface UserEventRepository extends PagingAndSortingRepository<UserEvent, String> {
}
