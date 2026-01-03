package xyz.topolina.todo.dto;

import java.util.Optional;

public record TodoDtoPatch(
        Optional<String> title,
        Optional<String> body
) {}
