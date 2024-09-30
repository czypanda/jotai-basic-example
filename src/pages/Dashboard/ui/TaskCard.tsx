import { Task } from "../model";

export function TasksCard ({ task }: { task: Task }) {
    return <div className="flex flex-row justify-between p-1">
        <div>{task.title}</div>
        <div>{task.status}</div>
    </div>
}
