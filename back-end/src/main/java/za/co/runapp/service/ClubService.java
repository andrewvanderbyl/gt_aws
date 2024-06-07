package za.co.runapp.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import za.co.runapp.entity.Club;
import za.co.runapp.entity.User;
import za.co.runapp.exception.BusinessException;
import za.co.runapp.repository.ClubRepository;
import za.co.runapp.repository.UserRepository;
import za.co.runapp.rest.dto.ClubDto;
import za.co.runapp.rest.dto.PageableDto;
import za.co.runapp.rest.dto.UserDto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@AllArgsConstructor
@Service
public class ClubService {

    private final ClubRepository clubRepository;
    private final UserRepository userRepository;

    public ClubDto createClub(final ClubDto clubDto) throws BusinessException {

        if (clubRepository.existsByName(clubDto.name())) {
            throw new BusinessException("Club name already exist");
        }

        final String id = UUID.randomUUID().toString();
        clubRepository.upsertClub(id, LocalDateTime.now(), LocalDateTime.now(),
                clubDto.name(), clubDto.email(), clubDto.contact(), clubDto.province(), clubDto.country());

        return new ClubDto(id, clubDto);
    }

    public ClubDto fetchClubById(final String clubId) throws BusinessException {

        Optional<Club> clubOptional = clubRepository.findById(clubId);

        if (clubOptional.isEmpty()) {
            throw new BusinessException("No club exists for id " + clubId);
        }

        return clubOptional.get().toClubDto();

    }

    public void storeUserForClub(final String clubId, final String userId) throws BusinessException {

        clubRepository.registerUserWithAClub(userId, clubId);
    }

    public PageableDto<ClubDto> getClubs(PageableDto pageableDto) {

        Page<Club> clubs = clubRepository.findAllByOrderByDateUpdatedDesc(
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

    public PageableDto<UserDto> getUsersForClub(String clubId, int page, int size) {

        Club club = clubRepository.getReferenceById(clubId);
        Page<User> users = userRepository.findByClubs(club, PageRequest.of(page, size));

        List<UserDto> userDtoList = users.stream()
                .map(User::toUserDto)
                .toList();

        return PageableDto.<UserDto>builder()
                .data(userDtoList)
                .totalElements(users.getTotalElements())
                .elementsPerPage(users.getPageable().getPageSize())
                .currentPageNumber(users.getPageable().getPageNumber())
                .totalPages(users.getTotalPages())
                .build();
    }

    public ClubDto updateClub(ClubDto clubDto) throws BusinessException {

        if (clubRepository.existsByNameAndIdNot(clubDto.name(), clubDto.id())) {
            throw new BusinessException("Club name already exist");
        }

        clubRepository.upsertClub(clubDto.id(), LocalDateTime.now(), LocalDateTime.now(),
                clubDto.name(), clubDto.email(), clubDto.contact(), clubDto.province(), clubDto.country());

        return new ClubDto(clubDto.id(), clubDto);
    }
}
