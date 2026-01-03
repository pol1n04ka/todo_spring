package xyz.topolina.todo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.ErrorResponse;
import org.springframework.web.ErrorResponseException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
class GlobalExceptionHandler {
    @ExceptionHandler(TodoNotFoundException.class)
    public ErrorResponse handleTodoNotFound(TodoNotFoundException e) {
        return new ErrorResponseException(HttpStatus.NOT_FOUND, e);
    }
}
