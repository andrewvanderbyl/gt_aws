package za.co.runapp.rest.dto;

import lombok.Builder;

@Builder
public record UserDto(String id,
                      String firstName,
                      String lastName,
                      String password,
                      String username,
                      String email,
                      String contact) {
}
