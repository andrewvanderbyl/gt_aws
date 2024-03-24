package za.co.runapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import za.co.runapp.rest.dto.EventDto;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Set;

@Data
@SuperBuilder
@NoArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "event")
public class Event extends AbstractEntity {

    private String name;
    private String detail;
    private boolean status;
    private LocalDateTime date;

    @OneToMany(mappedBy = "event", fetch = FetchType.LAZY)
    private Set<UserEvent> userEvents;

    public EventDto toEventDto() {
        return EventDto.builder()
                .id(getId())
                .name(getName())
                .detail(getDetail())
                .date(date.format(DateTimeFormatter.ISO_DATE_TIME))
                .build();
    }
}
