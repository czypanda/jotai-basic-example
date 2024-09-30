import { Task } from "../model"
import { TasksCard } from "./TaskCard"

export function TasksList ({ tasks }: { tasks: Task[] }) {
    return tasks.map((t) => <TasksCard key={t.id} task={t} />)
}
