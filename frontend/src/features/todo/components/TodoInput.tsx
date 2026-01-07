import Input from "../../../shared/components/Input.tsx";
import Button, {ButtonType} from "../../../shared/components/Button.tsx";

export default function TodoInput() {
    return(
        <div className="space-x-2 my-7 p-2 rounded-2xl bg-gray-200 flex w-full">
            <Input />
            <Button
                type={ButtonType.add}
                label="add"
                onClick={ () => console.log("Button clicked!") } />
        </div>
    )
}