package za.co.runapp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.io.Serializable;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class UserEventKey implements Serializable {

    @Column(name = "user_id")
    private String userId;

    @Column(name = "event_id")
    private String eventId;
}
