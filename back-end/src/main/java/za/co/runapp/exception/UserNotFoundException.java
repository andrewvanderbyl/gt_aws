package za.co.runapp.exception;

public class UserNotFoundException extends Throwable {
    public UserNotFoundException(String error) {
        super(error);
    }
}
