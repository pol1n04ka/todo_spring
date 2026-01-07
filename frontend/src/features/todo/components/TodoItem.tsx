import Checkbox from "../../../shared/components/Checkbox.tsx";
import Button, {ButtonType} from "../../../shared/components/Button.tsx";



export function TodoItem() {
    return(
        <div className="flex w-full justify-between space-x-3 items-center my-3">
            <Checkbox />
            <div className="text-xl font-medium flex-1 wrap-normal">
                TodoText TodoText TodoText TodoText TodoText TodoText TodoText
            </div>
            <div className="space-x-2 space-y-2 flex-col flex-wrap w-20">
                <Button
                    type={ButtonType.edit}
                    label="edit"
                    onClick={ () => console.log("Edit button clicked!") }/>
                <Button
                    type={ButtonType.edit}
                    label="delete"
                    onClick={ () => console.log("Delete button clicked!") }/>
            </div>
        </div>
    )
}