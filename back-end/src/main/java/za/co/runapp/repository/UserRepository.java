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

import java.time.LocalDateTime;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {

    User findByFirstNameAndLastName(String firstName, String lastName);

    Page<User> findByClubs(Club club, Pageable pageable);

    boolean existsByUsername(String username);
    boolean existsByUsernameAndIdNot(String username, String id);

    @Transactional
    @Modifying
    @Query(value = """
            INSERT INTO user
            (id, date_created, date_updated, version, contact, first_name, last_name, password, username)
            VALUES(?1, ?2, ?3, 1, ?4, ?5, ?6, ?7, ?8)
            ON DUPLICATE KEY UPDATE
            date_updated = ?3,
            version = version + 1,
            contact = ?4,
            first_name = ?5,
            last_name = ?6,
            password = ?7,
            username = ?8
            """, nativeQuery = true)
    void upsertUser(String id, LocalDateTime dateCreated, LocalDateTime dateUpdated, String contact,
                    String firstName, String lastName, String password, String userName);

    User findByIdAndUsername(String id, String username);

    Optional<User> findByUsername(String username);
}
