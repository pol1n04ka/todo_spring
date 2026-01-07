import TodoInput from "../features/todo/components/TodoInput.tsx";
import {useEffect, useState} from "react";
import {TodoItem} from "../features/todo/components/TodoItem.tsx";

function useScreenWidth() {
    const [width, setWidth] = useState(() => window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return width
}

function App() {

    const width = useScreenWidth()

    return (
    <>
      <div className="container flex flex-col items-center m-auto">
          <h1 className="text-3xl mt-10">
              Simple Todo App
          </h1>
          <h3 className="mt-1">Screen width is: {width}</h3>
          <TodoInput />
          <h2 className="text-xl">You have 1 todo(s)</h2>
          {Array.from({ length: 10 }, (_, i) => <TodoItem key={i} />)}
      </div>
    </>
  )
}

export default App
