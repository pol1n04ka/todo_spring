import {useEffect, useState} from "react";
import type Todo from "../types/todo.ts";
import {fetchTodos} from "../api/todosApi.ts";

export default function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchTodos().then(data => {
            setTodos([...Object.values(data)])
            setLoading(false)
      })
    }, []);

    return { todos, loading }
}