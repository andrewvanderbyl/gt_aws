package za.co.runapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.runapp.entity.Tag;

public interface TagRepository extends JpaRepository<Tag, String> {
}
