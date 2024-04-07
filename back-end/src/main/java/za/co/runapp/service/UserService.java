package za.co.runapp.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import za.co.runapp.entity.Asa;
import za.co.runapp.entity.User;
import za.co.runapp.exception.EntityNotFoundException;
import za.co.runapp.repository.AsaRepository;
import za.co.runapp.repository.ClubRepository;
import za.co.runapp.repository.RaceRepository;
import za.co.runapp.repository.UserRaceRepository;
import za.co.runapp.repository.UserRepository;
import za.co.runapp.rest.dto.AsaDto;
import za.co.runapp.rest.dto.ClubDto;
import za.co.runapp.rest.dto.PageableDto;
import za.co.runapp.rest.dto.RaceDto;
import za.co.runapp.rest.dto.UserDto;
import za.co.runapp.rest.dto.UserRaceDto;

import java.util.List;
import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Service
public class UserService {
    private final AsaRepository asaRepository;
    private final ClubRepository clubRepository;

    private final UserRepository userRepository;
    private final RaceRepository raceRepository;
    private final UserRaceRepository userRaceRepository;

    public UserDto createUser(final UserDto userDto) {

        User user = User.builder()
                .firstName(userDto.firstName())
                .lastName(userDto.lastName())
                .password(userDto.password())
                .username(userDto.username())
                .email(userDto.email())
                .contact(userDto.contact())
                .build();

        User createdUser = userRepository.saveAndFlush(user);

        return UserDto.builder()
                .id(createdUser.getId())
                .firstName(createdUser.getFirstName())
                .lastName(createdUser.getLastName())
                .contact(createdUser.getContact())
                .username(createdUser.getUsername())
                .password(createdUser.getPassword())
                .email(createdUser.getEmail())
                .build();
    }

    public UserDto fetchUserById(final String userId) throws EntityNotFoundException {

        Optional<User> userOpt = userRepository.findById(userId);
        if (userOpt.isEmpty()) {
            throw new EntityNotFoundException(String.format("No user found by id: %s", userId));
        }

        final User user = userOpt.get();
        return UserDto.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .contact(user.getContact())
                .username(user.getUsername())
                .password(user.getPassword())
                .email(user.getEmail())
                .build();
    }

    public PageableDto<ClubDto> getClubsForUser(final String userId, final int page, final int size) {

        User user = userRepository.getReferenceById(userId);

        Page<ClubDto> clubs = clubRepository.findClubByUser(user, PageRequest.of(page, size));

        return PageableDto.<ClubDto>builder()
                .data(clubs.getContent())
                .totalElements(clubs.getTotalElements())
                .elementsPerPage(clubs.getPageable().getPageSize())
                .currentPageNumber(clubs.getPageable().getPageNumber())
                .totalPages(clubs.getTotalPages())
                .build();

    }

    public PageableDto<UserRaceDto> getRacesForUser(String userId, int page, int size) {

        User user = userRepository.getReferenceById(userId);
        Page<UserRaceDto> races = userRaceRepository.findRacesByUser(user, PageRequest.of(page, size));

        return PageableDto.<UserRaceDto>builder()
                .data(races.getContent())
                .totalElements(races.getTotalElements())
                .elementsPerPage(races.getPageable().getPageSize())
                .currentPageNumber(races.getPageable().getPageNumber())
                .totalPages(races.getTotalPages())
                .build();
    }

    public PageableDto<AsaDto> getAsaForUser(String userId, int page, int size) {
        User user = userRepository.getReferenceById(userId);

        Page<Asa> asa = asaRepository.findByUser(user, PageRequest.of(page, size));

        List<AsaDto> list = asa.getContent().stream().map(Asa::toAsaDto).toList();

        return PageableDto.<AsaDto>builder()
                .data(list)
                .totalElements(asa.getTotalElements())
                .elementsPerPage(asa.getPageable().getPageSize())
                .currentPageNumber(asa.getPageable().getPageNumber())
                .totalPages(asa.getTotalPages())
                .build();
    }
}