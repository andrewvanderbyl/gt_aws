package za.co.runapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import za.co.runapp.rest.dto.RaceDto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Set;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "race")
public class Race extends AbstractEntity {

    private String name;
    private String distance;
    private BigDecimal cost;
    private LocalDateTime date;

    @ManyToMany(mappedBy = "races", fetch = FetchType.LAZY)
    private Set<User> users;

    public RaceDto toRaceDto() {
        return RaceDto.builder()
                .id(getId())
                .name(getName())
                .cost(getCost().doubleValue())
                .distance(getDistance())
                .date(date.format(DateTimeFormatter.ISO_DATE))
                .build();
    }
}
