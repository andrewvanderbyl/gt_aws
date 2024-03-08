package za.co.runapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Entity
@Table(name = "user_tags")
public class UserTags extends AbstractEntity {

    private UserAsa userAsa;
    private String tag;
}
