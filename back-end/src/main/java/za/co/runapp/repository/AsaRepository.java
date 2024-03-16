package za.co.runapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.runapp.entity.Asa;
import za.co.runapp.entity.User;

public interface AsaRepository extends JpaRepository<Asa, String> {

    Asa findByUser(User user);
}
