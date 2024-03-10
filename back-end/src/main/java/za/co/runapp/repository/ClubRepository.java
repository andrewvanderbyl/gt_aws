package za.co.runapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import za.co.runapp.entity.Club;

public interface ClubRepository extends JpaRepository<Club, String> {

    @Modifying
    @Transactional
    @Query(
            value = "insert into user_clubs (user_id,club_id) values (?,?)",
            nativeQuery = true
    )
    void registerUserWithAClub(final String userId, final String clubId);
}
