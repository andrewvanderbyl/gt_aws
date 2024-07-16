package za.co.runapp.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import za.co.runapp.entity.Club;
import za.co.runapp.entity.User;
import za.co.runapp.rest.dto.ClubDto;

import java.time.LocalDateTime;

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

    Page<Club> findAllByOrderByDateUpdatedDesc(Pageable pageable);

    boolean existsByNameAndIdNot(String name, String id);

    @Transactional
    @Modifying
    @Query(value = """
            INSERT INTO club
            (id, date_created, date_updated, version, name, email, contact, province, country)
            VALUES(?1, ?2, ?3, 1, ?4, ?5, ?6, ?7, ?8)
            ON DUPLICATE KEY UPDATE
            date_updated = ?3,
            version = version + 1,
            name = ?4,
            email = ?5,
            contact = ?6,
            province = ?7,
            country = ?8
            """, nativeQuery = true)
    void upsertClub(String id, LocalDateTime dateCreated, LocalDateTime dateUpdated, String name,
                    String email, String contact, String province, String country);

    boolean existsByName(String name);

    //boolean existsByNameAndUsers(String name, User user);
}
