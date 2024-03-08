package za.co.runapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.LocalDateTime;
import java.util.Set;

@Data
@SuperBuilder
@NoArgsConstructor
@Entity
@Table(name = "event")
public class Event extends AbstractEntity {

    private String name;
    private String detail;
    private boolean status;
    private LocalDateTime date;

    @OneToMany(mappedBy = "event", fetch = FetchType.LAZY)
    private Set<UserEvent> userEvents;
}
