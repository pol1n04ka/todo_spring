import Input from "../../../shared/components/Input.tsx";
import Button, {ButtonType} from "../../../shared/components/Button.tsx";
import {useState} from "react";
import * as React from "react";

interface TodoInputProps {
    addTodo: (title: string) => {}
}

export default function TodoInput({ addTodo }: TodoInputProps) {

    const [ title, setTitle ] = useState('')

    const handleSubmit = async (e: React.FormEvent)=> {
        e.preventDefault()
        addTodo(title)
        setTitle('')
    }

    return(
        <form
            onSubmit={ () => console.log("submit") }
            className="space-x-2 my-7 p-2 rounded-2xl bg-gray-200 flex w-full"
        >
            <Input
                title={ title }
                onChange={ event => setTitle(event.target.value)}
            />
            <Button
                type={ ButtonType.add }
                label="add"
                onClick={ handleSubmit } />
        </form>
    )
}