package za.co.runapp.rest.dto;

import lombok.Builder;

@Builder
public record TagDto(String id,
                     String tag) {
}
