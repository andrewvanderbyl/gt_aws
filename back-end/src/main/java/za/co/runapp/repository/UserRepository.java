package za.co.runapp.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import za.co.runapp.entity.User;
import za.co.runapp.rest.dto.ClubDto;

import java.util.List;

public interface UserRepository extends JpaRepository<User, String> {

}
