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
    let buttonType: "submit" | "button" | "reset" | undefined

    switch (type) {
        case ButtonType.add:
            buttonStyle = "bg-gray-500 hover:bg-gray-700 text-white h-10 px-4 py-2 rounded-xl font-medium"
            buttonType = "submit"
            break
        case ButtonType.edit:
            buttonStyle = "bg-gray-500 hover:bg-gray-700 text-white h-10 px-4 py-2 rounded-xl w-full font-medium"
            buttonType = "button"
            break
        default:
            buttonStyle = "bg-gray-500 hover:bg-gray-700 text-white h-10 px-4 py-2 rounded-xl w-full font-medium"
            buttonType = "button"
            break
    }

    return(
        <button className={buttonStyle} onClick={onClick} type={buttonType}>
            {label}
        </button>
    )
}