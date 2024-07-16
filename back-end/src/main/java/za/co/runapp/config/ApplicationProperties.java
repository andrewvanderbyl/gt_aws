package za.co.runapp.config;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Data
@ConfigurationProperties("app")
@RequiredArgsConstructor
public class ApplicationProperties {

    private final JwtInfo jwt;

    @Data
    @NoArgsConstructor
    public static class JwtInfo {
        private String signKey;
    }
}
