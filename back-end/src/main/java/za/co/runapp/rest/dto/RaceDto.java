package za.co.runapp.rest.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RaceDto {

    private String id;
    private String name;
    private Double cost;
    private String distance;
    private String date;

    public RaceDto(String id, String name, BigDecimal cost, String detail, LocalDateTime dateTime) {
        this(id, name, cost.doubleValue(), detail, dateTime.format(DateTimeFormatter.ISO_DATE));
    }
}
