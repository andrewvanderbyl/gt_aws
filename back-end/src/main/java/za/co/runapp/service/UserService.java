package za.co.runapp.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import za.co.runapp.entity.Role;
import za.co.runapp.entity.User;
import za.co.runapp.exception.BusinessException;
import za.co.runapp.repository.AsaRepository;
import za.co.runapp.repository.ClubRepository;
import za.co.runapp.repository.RoleRepository;
import za.co.runapp.repository.UserRaceRepository;
import za.co.runapp.repository.UserRepository;
import za.co.runapp.rest.dto.AsaDto;
import za.co.runapp.rest.dto.ClubDto;
import za.co.runapp.rest.dto.PageableDto;
import za.co.runapp.rest.dto.UserDto;
import za.co.runapp.rest.dto.UserRaceDto;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Set;

@Slf4j
@AllArgsConstructor
@Service
public class UserService {
    private final AsaRepository asaRepository;
    private final ClubRepository clubRepository;

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final UserRaceRepository userRaceRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    @Transactional
    public String createUser(final UserDto userDto) throws BusinessException {

        User user = User.builder()
                .firstName(userDto.firstName())
                .lastName(userDto.lastName())
                .password(passwordEncoder.encode(userDto.password()))
                .username(userDto.username())
                .contact(userDto.contact())
                .build();

        if (userRepository.existsByUsername(userDto.username())) {
            throw new BusinessException("Username already exist");
        }

        Role role = roleRepository.findByName("USER");
        user.setRoles(Set.of(role));
        User createdUser = userRepository.saveAndFlush(user);

        return tokenService.generateToken(createdUser);
    }

    public UserDto updateUser(final String userId, final UserDto userDto) throws BusinessException {

        if (userRepository.existsByUsernameAndIdNot(userDto.username(), userId)) {
            throw new BusinessException("Username already exist");
        }

        userRepository.upsertUser(userId, LocalDateTime.now(), LocalDateTime.now(), userDto.contact(),
                    userDto.firstName(), userDto.lastName(), userDto.password(), userDto.username());

        return UserDto.builder()
                .id(userId)
                .firstName(userDto.firstName())
                .lastName(userDto.lastName())
                .username(userDto.username())
                .password(userDto.password())
                .contact(userDto.contact())
                .build();
    }

    public UserDto fetchUserById(final String userId) throws BusinessException {

        Optional<User> userOpt = userRepository.findById(userId);
        if (userOpt.isEmpty()) {
            throw new BusinessException(String.format("No user found by id: %s", userId));
        }

        final User user = userOpt.get();
        return user.toUserDto();
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

        Page<AsaDto> asa = asaRepository.findByUserOrderByDateUpdatedDesc(user, PageRequest.of(page, size));

//        List<AsaDto> list = asa.getContent().stream().map(Asa::toAsaDto).toList();

        return PageableDto.<AsaDto>builder()
                .data(asa.getContent())
                .totalElements(asa.getTotalElements())
                .elementsPerPage(asa.getPageable().getPageSize())
                .currentPageNumber(asa.getPageable().getPageNumber())
                .totalPages(asa.getTotalPages())
                .build();
    }
}