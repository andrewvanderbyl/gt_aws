package za.co.runapp.repository;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import za.co.runapp.entity.Club;
import za.co.runapp.entity.User;

public interface UserRepository extends JpaRepository<User, String> {

    User findByUsernameAndPassword(String username, String password);

    Page<User> findByClubs(Club club, Pageable pageable);

    boolean existsByUsername(String username);
    boolean existsByUsernameAndIdNot(String username, String id);
}
