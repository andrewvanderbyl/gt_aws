package za.co.runapp.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import za.co.runapp.entity.Asa;
import za.co.runapp.entity.Tag;
import za.co.runapp.entity.User;
import za.co.runapp.repository.AsaRepository;
import za.co.runapp.repository.TagRepository;
import za.co.runapp.repository.UserRepository;
import za.co.runapp.rest.dto.AsaDto;
import za.co.runapp.rest.dto.TagDto;

@Slf4j
@AllArgsConstructor
@Service
public class RegistrationService {

    private final TagRepository tagRepository;
    private final AsaRepository asaRepository;
    private final UserRepository userRepository;

    public AsaDto createAsaForUser(AsaDto asaDto, String userId) {

        User user = userRepository.getReferenceById(userId);
        Asa toSave = Asa.builder().asa(asaDto.asa()).user(user).build();

        Asa persistedAsa = asaRepository.saveAndFlush(toSave);

        return persistedAsa.toAsaDto();
    }

    public TagDto createTagForUser(TagDto tagDto, String asaId, String userId) {

        Asa asa = asaRepository.getReferenceById(asaId);
        Tag toSave = Tag.builder().tag(tagDto.tag()).asa(asa).build();

        Tag persistedTag = tagRepository.saveAndFlush(toSave);
        return persistedTag.toTagDto();
    }
}
