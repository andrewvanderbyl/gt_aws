package za.co.runapp.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import za.co.runapp.entity.Race;
import za.co.runapp.rest.dto.RaceDto;

public interface RaceRepository extends JpaRepository<Race, String> {


    @Modifying
    @Transactional
    @Query(
            value = "insert into user_races (user_id, race_id) values (?,?)",
            nativeQuery = true
    )
    void registerUserForRace(final String userId, final String raceId);

    @Query("""
            SELECT 
                new za.co.runapp.rest.dto.RaceDto(r.id, r.name, r.cost, r.distance, r.date) 
            FROM Race AS r 
            JOIN r.users AS u 
            WHERE u.id = :userId
            """)
    Page<RaceDto> findRacesByUser(String userId, PageRequest of);
}
