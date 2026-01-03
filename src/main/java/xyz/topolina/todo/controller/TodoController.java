package xyz.topolina.todo.controller;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.topolina.todo.dto.TodoDtoCreate;
import xyz.topolina.todo.dto.TodoDtoPatch;
import xyz.topolina.todo.service.TodoService;
import xyz.topolina.todo.entity.Todo;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TodoController {
    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable Long id) {
        Todo todo = todoService.getTodoById(id);
        return ResponseEntity.ok().body(todo);
    }

    @PostMapping
    public ResponseEntity<Todo> createTodo(@Valid @RequestBody TodoDtoCreate todo) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(todoService.createTodo(todo));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Todo> patchTodo(@PathVariable Long id, @RequestBody TodoDtoPatch patch) {
        Todo todo = todoService.patchTodo(id, patch);
        return ResponseEntity
                .ok()
                .body(todo);
    }

    @PutMapping("/{id}/toggle")
    public ResponseEntity<Todo> toggleTodo(@PathVariable Long id) {
        Todo todo = todoService.toggleTodo(id);
        return ResponseEntity.ok().body(todo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Long id) {
        todoService.deleteTodo(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllTodos() {
        todoService.deleteAllTodos();
        return ResponseEntity.noContent().build();
    }
}
