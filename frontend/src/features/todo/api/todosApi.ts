import type Todo from "../types/todo.ts";
import type { TodoCreateDTO } from "../types/todo.ts";

// Todo: refactor api

export async function fetchTodos(): Promise<Todo[]> {
    const res = await fetch("/api/todos")
    if  (!res.ok) throw new Error("Failed to fetch")
    return res.json()
}

export async function createTodo(newTodo: TodoCreateDTO): Promise<Todo> {
    const res = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newTodo }),
    })
    if (!res.ok) throw new Error('Failed to create')
    return res.json()
}