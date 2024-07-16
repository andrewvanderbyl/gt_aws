package za.co.runapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import za.co.runapp.config.ApplicationProperties;

@SpringBootApplication
@EnableJpaAuditing
@EnableConfigurationProperties({ApplicationProperties.class})
@EnableJpaRepositories(basePackages = "za.co.runapp.repository")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
