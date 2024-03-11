package za.co.runapp.rest.dto;

import lombok.Builder;

@Builder
public record RaceDto(String id,
                      String name,
                      Double cost,
                      String distance,
                      String date) {
}
