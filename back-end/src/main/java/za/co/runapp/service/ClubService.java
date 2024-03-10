package za.co.runapp.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import za.co.runapp.entity.Club;
import za.co.runapp.exception.EntityNotFoundException;
import za.co.runapp.repository.ClubRepository;
import za.co.runapp.rest.dto.ClubDto;

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

}
