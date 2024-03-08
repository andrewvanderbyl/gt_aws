package za.co.runapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@Entity
@Table(name = "club")
public class Club extends AbstractEntity {

    private String name;
    private String email;
    private String contact;
    private String province;
    private String country;
}
