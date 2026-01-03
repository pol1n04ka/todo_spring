package xyz.topolina.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import xyz.topolina.todo.entity.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {}
