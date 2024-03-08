package za.co.runapp.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import za.co.runapp.entity.Role;

public interface RoleRepository extends PagingAndSortingRepository<Role, String> {
}
