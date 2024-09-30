import { atom } from "jotai"

import { Project, selectedProjectAtom } from "entities/projects";

import { Task, TaskStatus } from "./types"
import { selectedStatusesForTasksAtom } from "./filter";
import { tasksForFirstProject, tasksForSecondProject } from "./fake-data";

const getProjectTasksById = (id: Project["id"] | null) => {
    if (id === 1) return tasksForFirstProject
    if (id === 2) return tasksForSecondProject
    if (id === null) return []

    throw new Error(`Project with id ${id} not found`)
}

function filterTasksByStatuses(tasks: Task[], selectedStatuses: TaskStatus[]) {
    return tasks.filter((t) => selectedStatuses.includes(t.status))
}

export const tasksAtom = atom<Task[]>((get) => {
    const selectedProjectId = get(selectedProjectAtom)
    const tasks = getProjectTasksById(selectedProjectId)

    return tasks
});

export const filteredTasksAtom = atom((get) => {
    const tasks = get(tasksAtom)
    const selectedStatuses = get(selectedStatusesForTasksAtom)

    if (selectedStatuses.length === 0) return tasks

    const filteredTasks = filterTasksByStatuses(tasks, selectedStatuses)

    return filteredTasks
})
