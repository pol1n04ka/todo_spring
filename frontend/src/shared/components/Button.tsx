import type {MouseEventHandler} from "react";

export enum ButtonType {
    add,
    edit
}

type ButtonProps = {
    type: ButtonType,
    label: string,
    onClick: MouseEventHandler
}

export default function Button({ type, label, onClick }: ButtonProps) {

    let buttonStyle: string

    switch (type) {
        case ButtonType.add:
            buttonStyle = "bg-gray-500 hover:bg-gray-700 text-white h-10 px-4 py-2 rounded-xl font-medium"
            break
        case ButtonType.edit:
            buttonStyle = "bg-gray-500 hover:bg-gray-700 text-white h-10 px-4 py-2 rounded-xl w-full font-medium"
            break
        default:
            buttonStyle = "bg-gray-500 hover:bg-gray-700 text-white h-10 px-4 py-2 rounded-xl w-full font-medium"
            break
    }

    return(
        <button className={buttonStyle} onClick={onClick}>
            {label}
        </button>
    )
}