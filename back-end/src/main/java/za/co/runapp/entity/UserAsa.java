package za.co.runapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Entity
@Table(name = "user_asa")
public class UserAsa extends AbstractEntity {

    private User user;
    private String asa;

}
