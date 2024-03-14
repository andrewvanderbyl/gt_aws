package za.co.runapp.rest.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PageableDto<T> {

    @JsonProperty("size")
    private int elementsPerPage;

    @JsonProperty("page")
    private int currentPageNumber;

    @JsonProperty("count")
    private long totalElements;

    @JsonProperty("pages")
    private int totalPages;

    private List<T> data;
}
