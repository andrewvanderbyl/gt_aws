package za.co.runapp.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import za.co.runapp.entity.RolePermissions;

public interface RolePermissionsRepository extends PagingAndSortingRepository<RolePermissions, Long> {
}
