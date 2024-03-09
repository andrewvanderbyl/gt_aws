package za.co.runapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.runapp.entity.User;

public interface UserRepository extends JpaRepository<User, String> {
}
