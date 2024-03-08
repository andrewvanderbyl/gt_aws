package za.co.runapp.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import za.co.runapp.entity.Permissions;

public interface PermissionsRepository extends PagingAndSortingRepository<Permissions, String> {
}
