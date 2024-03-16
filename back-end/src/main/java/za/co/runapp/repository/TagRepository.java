package za.co.runapp.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import za.co.runapp.entity.Tag;
import za.co.runapp.rest.dto.TagDto;

public interface TagRepository extends JpaRepository<Tag, String> {

    @Query("""
            SELECT 
                new za.co.runapp.rest.dto.TagDto(t.id, t.tag) 
            FROM Tag AS t 
            JOIN t.asa AS a 
            WHERE a.id = :asaId
            AND a.user.id = :userId 
            """)
    Page<TagDto> findTagsByAsa(String asaId, String userId, Pageable pageable);
}
