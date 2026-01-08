export default interface Todo {
    id: number,
    title: string,
    body?: string,
    completed: boolean,
    createdAt?: string,
    updatedAt?: string
}

export interface TodoCreateDTO {
    title: string
}