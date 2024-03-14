package za.co.runapp.rest.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.cglib.core.Local;
import za.co.runapp.entity.Event;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EventDto {

    String id;
    String name;
    String detail;
    String date;

    public EventDto(String id, String name, String detail, LocalDateTime dateTime) {
        this(id, name, detail, dateTime.format(DateTimeFormatter.ISO_DATE));
    }
}
