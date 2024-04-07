package za.co.runapp.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import za.co.runapp.entity.Tag;
import za.co.runapp.entity.User;
import za.co.runapp.rest.dto.TagDto;
import za.co.runapp.rest.dto.UserTagDto;

public interface TagRepository extends JpaRepository<Tag, String> {

    @Query("""
        SELECT new za.co.runapp.rest.dto.TagDto(t.id, t.tag) 
        FROM Tag AS t 
        JOIN t.asa AS a 
        WHERE a.id = :asaId
        AND a.user.id = :userId 
    """)
    Page<TagDto> findTagsByAsa(String asaId, String userId, Pageable pageable);

    @Query("""
        SELECT new za.co.runapp.rest.dto.UserTagDto(t.id, t.asa.asa, t.tag) 
        FROM Tag AS t 
        WHERE t.asa.user = :user 
    """)
    Page<UserTagDto> findTagsByUser(User user, Pageable pageable);
}
