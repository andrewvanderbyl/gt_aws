package za.co.runapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
@Entity
@Table(name = "event")
public class Event extends AbstractEntity {

    private String name;
    private String detail;
    private boolean status;
    private LocalDateTime date;
}
