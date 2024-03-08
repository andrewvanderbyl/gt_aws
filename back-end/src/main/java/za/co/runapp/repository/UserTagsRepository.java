package za.co.runapp.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import za.co.runapp.entity.UserTags;

public interface UserTagsRepository extends PagingAndSortingRepository<UserTags, Long> {
}
