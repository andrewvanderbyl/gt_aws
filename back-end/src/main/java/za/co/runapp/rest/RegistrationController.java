package za.co.runapp.rest;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import za.co.runapp.rest.dto.AsaDto;
import za.co.runapp.rest.dto.TagDto;
import za.co.runapp.service.RegistrationService;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/registration")
public class RegistrationController {

    private final RegistrationService registrationService;

    @PostMapping("/asa")
    public Mono<ResponseEntity<AsaDto>> createAsa(
            @RequestBody final AsaDto asaDto,
            @RequestHeader("userId") final String userId) {

        AsaDto saved = registrationService.createAsaForUser(asaDto, userId);
        return Mono.just(ResponseEntity.ok(saved));
    }

    @PostMapping("/asa/{asaId}/tags")
    public Mono<ResponseEntity<TagDto>> createTag(
            @RequestBody final TagDto tagDto,
            @PathVariable("asaId") final String asaId,
            @RequestHeader("userId") final String userId) {

        TagDto saved = registrationService.createTagForUser(tagDto, asaId, userId);
        return Mono.just(ResponseEntity.ok(saved));
    }

}
