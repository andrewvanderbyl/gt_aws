package za.co.runapp.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import za.co.runapp.entity.Asa;
import za.co.runapp.entity.User;
import za.co.runapp.rest.dto.PageableDto;

public interface AsaRepository extends JpaRepository<Asa, String> {

    Page<Asa> findByUser(User user, Pageable pageable);
}
