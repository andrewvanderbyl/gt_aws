package za.co.runapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import za.co.runapp.rest.dto.ClubDto;

import java.util.Set;

@Data
@SuperBuilder
@NoArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "club")
public class Club extends AbstractEntity {

    private String name;
    private String email;
    private String contact;
    private String province;
    private String country;

    @ManyToMany(mappedBy = "clubs", fetch = FetchType.LAZY)
    private Set<User> users;
    
    public ClubDto toClubDto() {
        return ClubDto.builder()
                .id(getId())
                .name(getName())
                .country(getCountry())
                .contact(getContact())
                .email(getEmail())
                .province(getProvince())
                .build();
    }
}
