package za.co.runapp.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import za.co.runapp.entity.UserRace;

public interface UserRaceRepository extends PagingAndSortingRepository<UserRace, Long> {
}
