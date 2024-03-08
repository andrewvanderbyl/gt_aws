package za.co.runapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@Entity
@Table(name = "user")
public class User extends AbstractEntity {

    private String firstName;
    private String lastName;
    private String password;
    private String username;
    private String email;
    private String contact;
}
