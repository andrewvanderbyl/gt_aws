package za.co.runapp.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import za.co.runapp.entity.Asa;
import za.co.runapp.entity.User;
import za.co.runapp.rest.dto.AsaDto;
import za.co.runapp.rest.dto.PageableDto;

public interface AsaRepository extends JpaRepository<Asa, String> {

    boolean existsByAsaAndUser(String asa, User user);

    @Query("""
           SELECT new za.co.runapp.rest.dto.AsaDto(a.id, a.asa, count(t))
           FROM Asa a 
           LEFT JOIN a.tags AS t
           WHERE a.user = :user 
           GROUP BY a.asa, a.id
           ORDER BY a.dateUpdated DESC
           """
    )
    Page<AsaDto> findByUserOrderByDateUpdatedDesc(User user, Pageable pageable);
}
