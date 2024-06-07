package za.co.runapp.rest.dto;

import lombok.Builder;

@Builder
public record ClubDto(String id,
                      String name,
                      String email,
                      String contact,
                      String province,
                      String country) {

    public ClubDto(String id, ClubDto clubDto) {
        this(id, clubDto.name(), clubDto.email(), clubDto.contact(), clubDto.province(),
                clubDto.country());
    }
}