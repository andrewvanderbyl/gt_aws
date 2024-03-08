package za.co.runapp.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import za.co.runapp.entity.User;

public interface UserRepository extends PagingAndSortingRepository<User, Long> {
}
