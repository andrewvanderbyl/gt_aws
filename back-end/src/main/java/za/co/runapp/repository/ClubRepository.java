package za.co.runapp.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import za.co.runapp.entity.Club;
import za.co.runapp.entity.User;
import za.co.runapp.rest.dto.ClubDto;

public interface ClubRepository extends JpaRepository<Club, String> {

    @Modifying
    @Transactional
    @Query(
            value = "insert into user_clubs (user_id,club_id) values (?,?)",
            nativeQuery = true
    )
    void registerUserWithAClub(final String userId, final String clubId);

    @Query("""
            SELECT 
                new za.co.runapp.rest.dto.ClubDto(c.id, c.name, c.email, c.contact, c.province, c.country) 
            FROM Club AS c 
            JOIN c.users AS u 
            WHERE u = :user 
            """)
    Page<ClubDto> findClubByUser(User user, Pageable pageable);

}
