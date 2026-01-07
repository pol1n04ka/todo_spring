import TodoInput from "../features/todo/components/TodoInput.tsx";
import Todos from "../features/todo/components/Todos.tsx";

function App() {



    return (
    <>
      <div className="container flex flex-col items-center m-auto">
          <h1 className="text-3xl mt-10">
              Simple Todo App
          </h1>
          <TodoInput />
          <Todos />
          {/*{Array.from({ length: 10 }, (_, i) => <TodoItem key={i} />)}*/}
      </div>
    </>
  )
}

export default App
