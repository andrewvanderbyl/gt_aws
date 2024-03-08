package za.co.runapp.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Version;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
public class AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    protected Long id;

    @CreatedDate
    protected LocalDateTime dateCreated;

    @LastModifiedDate
    protected LocalDateTime dateUpdated;

    @Version
    protected long version;
}
