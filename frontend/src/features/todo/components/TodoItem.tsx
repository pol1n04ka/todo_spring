import Checkbox from "../../../shared/components/Checkbox.tsx";
import Button, {ButtonType} from "../../../shared/components/Button.tsx";
import type {MouseEventHandler} from "react";

type TodoItemProps = {
    title: string,
    body: string,
    id: number,
    deleteTodo: (id: number) => {}
}

export function TodoItem({ title, body, id, deleteTodo }: TodoItemProps) {

    const handleDelete: MouseEventHandler<HTMLButtonElement> = () => {
        deleteTodo(id)
    }

    return(
        <div className="flex w-full justify-between space-x-3 items-center my-3">
            <Checkbox />
            <div className=" font-medium flex-1 wrap-normal">
                <h1 className="text-xl">{ title }</h1>
                { body === "" ? "" : <p>{ body }</p> }
            </div>
            <div className="space-x-2 space-y-2 flex-col flex-wrap w-20">
                <Button
                    type={ ButtonType.edit }
                    label="edit"
                    onClick={ () => console.log("Edit button clicked!") }/>
                <Button
                    type={ ButtonType.edit }
                    label="delete"
                    onClick={ handleDelete }/>
            </div>
        </div>
    )
}