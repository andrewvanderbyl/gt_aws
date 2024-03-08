package za.co.runapp.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import za.co.runapp.entity.UserRole;

public interface UserRoleRepository extends PagingAndSortingRepository<UserRole, Long> {
}
