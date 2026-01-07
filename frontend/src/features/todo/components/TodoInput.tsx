import Input from "../../../shared/components/Input.tsx";
import Button, {ButtonType} from "../../../shared/components/Button.tsx";
import {useState} from "react";
import * as React from "react";
// import type {TodoCreateDTO} from "../types/todo.ts";

export default function TodoInput() {

    const [ title, setTitle ] = useState('')

    const handleSubmit = (e: React.FormEvent)=> {
        e.preventDefault()
        console.log(title)

        // Todo: add code for submitting todo
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