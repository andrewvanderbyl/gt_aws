package za.co.runapp.rest;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import za.co.runapp.entity.Club;
import za.co.runapp.exception.BusinessException;
import za.co.runapp.rest.dto.ClubDto;
import za.co.runapp.rest.dto.PageableDto;
import za.co.runapp.rest.dto.UserDto;
import za.co.runapp.service.ClubService;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/clubs")
public class ClubController {

    private final ClubService clubService;

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public Mono<ResponseEntity> createClub(@RequestBody final ClubDto clubDto) throws BusinessException {

        log.info("Creating club {}", clubDto);

        ClubDto persistedClub = clubService.createClub(clubDto);
        return Mono.just(ResponseEntity.ok(persistedClub));
    }

    @PutMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public Mono<ResponseEntity> updateClub(@RequestBody final ClubDto clubDto) throws BusinessException {

        log.info("Updating Club {}", clubDto);

        ClubDto updatedClub = clubService.updateClub(clubDto);
        return Mono.just(ResponseEntity.ok(updatedClub));
    }

    @PostMapping(value = "/list")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public Mono<ResponseEntity<PageableDto<ClubDto>>> getClubs(@RequestBody final PageableDto pageableDto) {

        PageableDto<ClubDto> clubPageable = clubService.getClubs(pageableDto);
        return Mono.just(ResponseEntity.ok(clubPageable));
    }

    @GetMapping("/{id}")
    public Mono<ResponseEntity<ClubDto>> getClub(@PathVariable("id") final String clubId) {

        log.info("Received {}", clubId);

        try {
            ClubDto club = clubService.fetchClubById(clubId);
            return Mono.just(ResponseEntity.ok(club));
        } catch (BusinessException cnfe) {
            return Mono.just(ResponseEntity.badRequest().build());
        }
    }

    @PostMapping("/{id}/users")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public Mono<ResponseEntity> associateUserWithClub(
            @PathVariable("id") final String clubId,
            final Authentication authentication) {

        try {
            clubService.storeUserForClub(clubId, (String) authentication.getPrincipal());
            return Mono.just(ResponseEntity.ok().build());
        } catch (BusinessException cnfe) {
            return Mono.just(ResponseEntity.badRequest().build());
        }
    }

    @GetMapping("/{id}/users")
    public Mono<ResponseEntity<PageableDto<UserDto>>> getUsersForClub(
            @PathVariable("id") final String clubId,
            @RequestParam("page") final int page,
            @RequestParam("size") final int size,
            @RequestHeader("userId") final String userId) {

        PageableDto<UserDto> clubUserList = clubService.getUsersForClub(clubId, page, size);
        return Mono.just(ResponseEntity.ok(clubUserList));
    }
}
