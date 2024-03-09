package za.co.runapp.rest.dto;

import lombok.Builder;

@Builder
public record ClubDto(String name,
                      String email,
                      String contact,
                      String province,
                      String country) {
}
