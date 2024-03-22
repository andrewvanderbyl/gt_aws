package za.co.runapp.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import za.co.runapp.entity.Club;
import za.co.runapp.entity.Event;
import za.co.runapp.exception.EntityNotFoundException;
import za.co.runapp.repository.ClubRepository;
import za.co.runapp.rest.dto.ClubDto;
import za.co.runapp.rest.dto.EventDto;
import za.co.runapp.rest.dto.PageableDto;

import java.util.List;
import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Service
public class ClubService {

    private final ClubRepository clubRepository;

    public ClubDto createClub(final ClubDto clubDto) {

        Club club = Club.builder()
                .name(clubDto.name())
                .contact(clubDto.contact())
                .email(clubDto.email())
                .country(clubDto.country())
                .province(clubDto.province())
                .build();

        Club persistedClub = clubRepository.saveAndFlush(club);

        return persistedClub.toClubDto();
    }

    public ClubDto fetchClubById(final String clubId) throws EntityNotFoundException {

        Optional<Club> clubOptional = clubRepository.findById(clubId);

        if (clubOptional.isEmpty()) {
            throw new EntityNotFoundException("No club exists for id " + clubId);
        }

        return clubOptional.get().toClubDto();

    }

    public void storeUserForClub(final String clubId, final String userId) throws EntityNotFoundException {

        clubRepository.registerUserWithAClub(userId, clubId);
    }

    public PageableDto<ClubDto> getClubs(PageableDto pageableDto) {

        Page<Club> clubs = clubRepository.findAll(
                PageRequest.of(pageableDto.getCurrentPageNumber(), pageableDto.getElementsPerPage()));

        List<ClubDto> clubDtoList = clubs.stream()
                .map(Club::toClubDto)
                .toList();

        return PageableDto.<ClubDto>builder()
                .data(clubDtoList)
                .totalElements(clubs.getTotalElements())
                .elementsPerPage(clubs.getPageable().getPageSize())
                .currentPageNumber(clubs.getPageable().getPageNumber())
                .totalPages(clubs.getTotalPages())
                .build();
    }
}
