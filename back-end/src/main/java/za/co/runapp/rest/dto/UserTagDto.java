package za.co.runapp.rest.dto;

import lombok.Builder;

@Builder
public record UserTagDto(String tagId,
                         String asa,
                         String tag) {
}
