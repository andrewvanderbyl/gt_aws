package za.co.runapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import za.co.runapp.entity.Race;

public interface RaceRepository extends JpaRepository<Race, String> {


    @Modifying
    @Transactional
    @Query(
            value = "insert into user_races (user_id, race_id) values (?,?)",
            nativeQuery = true
    )
    void registerUserForRace(final String userId, final String raceId);
}
