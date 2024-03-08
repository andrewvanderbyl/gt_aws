package za.co.runapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@Entity
@Table(name = "race")
public class Race extends AbstractEntity {

    private String name;
    private String distance;
    private BigDecimal cost;
    private LocalDateTime date;

}
