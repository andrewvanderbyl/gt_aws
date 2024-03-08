package za.co.runapp.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import za.co.runapp.entity.Race;

public interface RaceRepository extends PagingAndSortingRepository<Race, String> {
}
