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
public class UserRaceDto {

    private String raceId;
    private String name;
    private BigDecimal cost;
    private String details;
    private String date;
    private int position;
    private String timing;

    public UserRaceDto(String raceId, String name, BigDecimal cost, String detail, LocalDateTime dateTime, int position,
                       String timing) {
        this(raceId, name, cost, detail, dateTime.format(DateTimeFormatter.ISO_DATE),
                position, timing);
    }
}
