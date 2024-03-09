package za.co.runapp.rest;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import za.co.runapp.entity.Club;
import za.co.runapp.rest.dto.ClubDto;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/users/clubs")
public class ClubController {

    @PostMapping
    public Mono<ResponseEntity> createClub(@RequestBody final ClubDto clubDto) {
        log.info("Received {}", clubDto);

        return Mono.just(ResponseEntity.ok().build());
    }

    @GetMapping("/{id}")
    public Mono<ResponseEntity<ClubDto>> getClub(@PathVariable("id") final String clubId) {
        log.info("Received {}", clubId);

        return Mono.just(ResponseEntity.ok(ClubDto.builder()
                .name("test")
                .email("test@test.com")
                .contact("test1234")
                .province("western-cape")
                .country("south-africa")
                .build()));
    }
}
