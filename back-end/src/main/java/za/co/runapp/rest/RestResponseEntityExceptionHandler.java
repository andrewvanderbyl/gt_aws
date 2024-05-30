package za.co.runapp.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import za.co.runapp.exception.BusinessException;

@ControllerAdvice
public class RestResponseEntityExceptionHandler {

    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<Object> handleEntityNotFound(final BusinessException enfe) {
        return ResponseEntity.badRequest().body(enfe.getMessage());
    }
}
