export default function Checkbox() {
    return (
        <div className="flex gap-2">
            <input
                type="checkbox"
                className="
                    relative peer shrink-0
                    appearance-none w-8 h-8 rounded-sm
                    bg-gray-200 checked:bg-gray-500"
            />
            <svg
                className="
                    absolute
                    w-8 h-8
                    hidden peer-checked:block
                    pointer-events-none text-white p-0.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
    )
}