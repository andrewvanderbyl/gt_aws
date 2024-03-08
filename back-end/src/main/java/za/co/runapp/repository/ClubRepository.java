package za.co.runapp.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import za.co.runapp.entity.Club;

public interface ClubRepository extends PagingAndSortingRepository<Club, Long> {
}
