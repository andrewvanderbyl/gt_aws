package za.co.runapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Entity
@Table(name = "user_club")
public class UserClub {

    private User user;
    private Club club;
}
