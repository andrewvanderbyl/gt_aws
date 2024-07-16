package za.co.runapp.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import za.co.runapp.entity.Role;
import za.co.runapp.entity.User;

import java.util.List;
import java.util.Set;

public interface RoleRepository extends PagingAndSortingRepository<Role, String> {
    Role findByName(String name);

    List<Role> findByUsers(User user);
}
