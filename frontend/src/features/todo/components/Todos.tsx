import useTodos from "../hooks/useTodos.ts";
import {TodoItem} from "./TodoItem.tsx";

export default function Todos() {

    const { todos, loading } = useTodos()

    if (loading) return <div>Loading</div>

    return(
        <>
            <h2 className="text-2xl">You have {todos.length} todo(s)</h2>
            { todos.map(todo => {
                return <TodoItem
                    key={todo.id}
                    title={todo.title}
                    body={todo.body}
                />
            })}
        </>
    )
}