package za.co.runapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Set;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "race")
public class Race extends AbstractEntity {

    private String name;
    private String distance;
    private BigDecimal cost;
    private LocalDateTime date;

    @ManyToMany(mappedBy = "races", fetch = FetchType.LAZY)
    private Set<User> users;
}
