import TodoInput from "../features/todo/components/TodoInput.tsx";
import Todos from "../features/todo/components/Todos.tsx";
import useTodos from "../features/todo/hooks/useTodos.ts";

function App() {

    const { todos, loading, error, addTodo, deleteTodo } = useTodos()

    return (
    <>
      <div className="container flex flex-col items-center m-auto">
          <h1 className="text-3xl mt-10">
              Simple Todo App
          </h1>
          <TodoInput
            addTodo={addTodo}
          />
          <Todos
              todos={todos}
              loading={loading}
              error={error}
              deleteTodo={deleteTodo}
          />
      </div>
    </>
  )
}

export default App
