import {TodoItem} from "./TodoItem.tsx";
import type Todo from "../types/todo.ts";

interface TodosProps {
    todos: Todo[],
    error: boolean,
    loading: boolean,
    deleteTodo: (id: number) => {}
}

export default function Todos({ todos, error, loading, deleteTodo }: TodosProps) {

    if (error) return <div>Something gone south (error)</div>

    if (loading) return <div>Loading</div>

    return(
        <>
            <h2 className="text-2xl">You have {todos.length} todo(s)</h2>
            { todos.map(todo => {
                return <TodoItem
                    key={todo.id}
                    title={todo.title}
                    body={todo.body || ""}
                    id={todo.id}
                    deleteTodo={ deleteTodo }
                />
            })}
        </>
    )
}