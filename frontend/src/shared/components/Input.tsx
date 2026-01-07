import type {ChangeEventHandler} from "react";

export interface InputProps {
    title: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Input({ title, onChange }: InputProps) {
    return(
        <input
            value={ title }
            onChange={ onChange }
            className="border-2 border-gray-500 bg-white rounded-xl h-10 px-2 flex-1"
            placeholder="What to do?"
            type="text"/>
    )
}