import {useEffect, useState} from "react";
import type Todo from "../types/todo.ts";
import {createTodoApi, deleteTodoApi, fetchTodosApi} from "../api/todosApi.ts";

export default function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchTodosApi().then(data => {
            setTodos(data)
            setLoading(false)
      })
            .catch(() => setError(true))
    }, []);

    const addTodo = async (title: string) => {
        const newTodo = await createTodoApi({ title })
        setTodos(prevState => [...prevState, newTodo])
    }

    const deleteTodo = async (id: number)=> {
        await deleteTodoApi(id)
        setTodos(prevState => prevState.filter(todo => todo.id !== id))
    }

    return { todos, loading, error, addTodo, deleteTodo }
}