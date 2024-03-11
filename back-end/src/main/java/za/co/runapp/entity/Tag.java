package za.co.runapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import za.co.runapp.rest.dto.TagDto;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "user_tags")
public class Tag extends AbstractEntity {

    private String tag;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "asa_id")
    private Asa asa;

    public TagDto toTagDto() {
        return TagDto.builder()
                .id(getId())
                .tag(getTag())
                .build();
    }
}
