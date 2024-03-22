package za.co.runapp.rest;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import za.co.runapp.exception.EntityNotFoundException;
import za.co.runapp.rest.dto.ClubDto;
import za.co.runapp.rest.dto.EventDto;
import za.co.runapp.rest.dto.PageableDto;
import za.co.runapp.service.ClubService;

import java.util.List;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/clubs")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ClubController {

    private final ClubService clubService;

    @PostMapping
    public Mono<ResponseEntity> createClub(
            @RequestBody final ClubDto clubDto) {

        log.info("Received {}", clubDto);

        ClubDto persistedClub = clubService.createClub(clubDto);
        return Mono.just(ResponseEntity.ok(persistedClub));
    }

    @PostMapping(value = "/list", consumes = {
            MediaType.APPLICATION_JSON_VALUE
    })
    public Mono<ResponseEntity<PageableDto<ClubDto>>> getClubs(
            @RequestBody final PageableDto pageableDto) {

        PageableDto<ClubDto> clubPageable = clubService.getClubs(pageableDto);
        return Mono.just(ResponseEntity.ok(clubPageable));
    }

    @GetMapping("/{id}")
    public Mono<ResponseEntity<ClubDto>> getClub(
            @PathVariable("id") final String clubId) {

        log.info("Received {}", clubId);

        try {
            ClubDto club = clubService.fetchClubById(clubId);
            return Mono.just(ResponseEntity.ok(club));
        } catch (EntityNotFoundException cnfe) {
            return Mono.just(ResponseEntity.badRequest().build());
        }
    }

    @PostMapping("/{id}/users")
    public Mono<ResponseEntity> associateUserWithClub(
            @PathVariable("id") final String clubId,
            @RequestHeader("userId") final String userId) {

        try {
            clubService.storeUserForClub(clubId, userId);
            return Mono.just(ResponseEntity.ok().build());
        } catch (EntityNotFoundException cnfe) {
            return Mono.just(ResponseEntity.badRequest().build());
        }
    }
}
