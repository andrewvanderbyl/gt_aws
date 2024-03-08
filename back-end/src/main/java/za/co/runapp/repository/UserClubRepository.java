package za.co.runapp.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import za.co.runapp.entity.UserClub;

public interface UserClubRepository extends PagingAndSortingRepository<UserClub, Long> {
}
