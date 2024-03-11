package za.co.runapp.rest;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import za.co.runapp.rest.dto.RaceDto;
import za.co.runapp.service.RaceService;

@Slf4j
@AllArgsConstructor
@RestController
@Service
@RequestMapping("/races")
public class RaceController {

    private final RaceService raceService;

    @PostMapping
    public Mono<ResponseEntity<RaceDto>> createRace(@RequestBody final RaceDto raceDto) {

        RaceDto saved = raceService.createRace(raceDto);
        return Mono.just(ResponseEntity.ok(saved));
    }

    @PostMapping("/{id}")
    public Mono<ResponseEntity> associateUserWithRace(
            @PathVariable("id") final String raceId,
            @RequestHeader("userId") final String userId) {

        raceService.associateUserWithRace(raceId, userId);
        return Mono.just(ResponseEntity.ok().build());
    }
}
