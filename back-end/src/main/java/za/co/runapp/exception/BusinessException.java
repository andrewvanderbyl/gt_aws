package za.co.runapp.exception;

public class BusinessException extends Throwable {

    public BusinessException(String error) {
        super(error);
    }
}
