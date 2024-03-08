package za.co.runapp.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import za.co.runapp.entity.Tag;

public interface TagRepository extends PagingAndSortingRepository<Tag, String> {
}
