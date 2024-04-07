package za.co.runapp.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import za.co.runapp.entity.User;
import za.co.runapp.entity.UserRace;
import za.co.runapp.rest.dto.RaceDto;
import za.co.runapp.rest.dto.UserRaceDto;

public interface UserRaceRepository extends JpaRepository<UserRace, String> {

    @Query("""
            SELECT
                new za.co.runapp.rest.dto.UserRaceDto(ur.race.id, ur.race.name, ur.race.cost, ur.race.distance, ur.race.date, ur.position, ur.timing) 
            FROM UserRace AS ur
            WHERE ur.user = :user
            ORDER BY ur.createdAt DESC
            """)
    Page<UserRaceDto> findRacesByUser(User user, PageRequest of);
}