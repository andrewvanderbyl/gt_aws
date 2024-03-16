package za.co.runapp.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import za.co.runapp.entity.Asa;
import za.co.runapp.entity.Tag;
import za.co.runapp.entity.User;
import za.co.runapp.repository.AsaRepository;
import za.co.runapp.repository.TagRepository;
import za.co.runapp.repository.UserRepository;
import za.co.runapp.rest.dto.AsaDto;
import za.co.runapp.rest.dto.ClubDto;
import za.co.runapp.rest.dto.PageableDto;
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

    public PageableDto<TagDto> fetchTagsForAsa(final String asaId, final String userId, final PageableDto pageableDto) {

        Page<TagDto> events = tagRepository.findTagsByAsa(asaId, userId,
                PageRequest.of(pageableDto.getCurrentPageNumber(), pageableDto.getElementsPerPage()));

        return PageableDto.<TagDto>builder()
                .data(events.getContent())
                .totalElements(events.getTotalElements())
                .elementsPerPage(events.getPageable().getPageSize())
                .currentPageNumber(events.getPageable().getPageNumber())
                .totalPages(events.getTotalPages())
                .build();
    }
}
