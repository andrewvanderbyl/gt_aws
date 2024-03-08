package za.co.runapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Entity
@Table(name = "role_permissions")
public class RolePermissions extends AbstractEntity {

    private Role role;
    private Permissions permissions;
}
