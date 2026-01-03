package xyz.topolina.todo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class TodoNotFoundException extends RuntimeException {
    public TodoNotFoundException(String message) {
        super(message);
    }

    public TodoNotFoundException(Long id) {
        super("Todo with id %d not found.".formatted(id));
    }
}
