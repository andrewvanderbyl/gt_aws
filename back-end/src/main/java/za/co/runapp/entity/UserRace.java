package za.co.runapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Entity
@Table(name = "user_race")
public class UserRace extends AbstractEntity {

    private User user;
    private Race race;
}
