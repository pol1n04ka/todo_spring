package xyz.topolina.todo.dto;

import jakarta.validation.constraints.NotBlank;

public record TodoDtoCreate(
        @NotBlank(message = "Title cannot be empty!")
        String title,
        String body
) {}
