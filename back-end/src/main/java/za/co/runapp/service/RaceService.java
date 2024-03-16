package za.co.runapp.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import za.co.runapp.entity.Race;
import za.co.runapp.repository.RaceRepository;
import za.co.runapp.rest.dto.RaceDto;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Slf4j
@AllArgsConstructor
@Service
public class RaceService {

    private final RaceRepository raceRepository;

    public RaceDto createRace(RaceDto raceDto) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        Race toSave = Race.builder()
                .name(raceDto.getName())
                .cost(BigDecimal.valueOf(raceDto.getCost()))
                .distance(raceDto.getDistance())
                .date(LocalDateTime.of(LocalDate.parse(raceDto.getDate(), formatter), LocalTime.of(0,0)))
                .build();

        Race persistedRace = raceRepository.saveAndFlush(toSave);
        return persistedRace.toRaceDto();
    }

    public void associateUserWithRace(String raceId, String userId) {

        raceRepository.registerUserForRace(userId, raceId);
    }
}
