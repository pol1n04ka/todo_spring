package xyz.topolina.todo.service;

import org.springframework.stereotype.Service;
import xyz.topolina.todo.dto.TodoDtoCreate;
import xyz.topolina.todo.dto.TodoDtoPatch;
import xyz.topolina.todo.entity.Todo;
import xyz.topolina.todo.exception.TodoNotFoundException;
import xyz.topolina.todo.repository.TodoRepository;

import java.util.List;
import java.util.Objects;

@Service
public class TodoService {
    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Todo getTodoById(Long id) {
        return todoRepository.findById(id)
                .orElseThrow(() -> new TodoNotFoundException(id));
    }

    public Todo createTodo(TodoDtoCreate dto) {
        Todo todo = new Todo();

        todo.setTitle(dto.title());
        todo.setBody(Objects.requireNonNullElse(dto.body(), ""));

        return todoRepository.save(todo);
    }

    public Todo patchTodo(Long id, TodoDtoPatch dto) {
        Todo todo = todoRepository
                .findById(id)
                .orElseThrow(() -> new TodoNotFoundException(id));

        dto.title().ifPresent(todo::setTitle);
        dto.body().ifPresent(todo::setBody);

        return todoRepository.save(todo);
    }


    public Todo toggleTodo(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new TodoNotFoundException(id));

        todo.toggleCompleted();

        return todoRepository.save(todo);
    }

    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }

    public void deleteAllTodos() {
        todoRepository.deleteAll();
    }
}
