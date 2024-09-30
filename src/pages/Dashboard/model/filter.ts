import { atom } from "jotai";

import { Project, projectsAtom, ProjectStatus } from "entities/projects";

import { filteredProjectsAtom } from "./projects";
import { TaskStatus } from "./types";

interface StatusesReducerAction<T> {
    type: "set" | "reset",
    payload: T[]
}

function statusesReducer <T>(action: StatusesReducerAction<T>): T[] {
    if (action.type === 'set') {
        return action.payload
    }

    if (action.type === 'reset') {
        return []
    }

    throw new Error("invalid action")
}

export const selectedStatusesForTasksAtom = atom<TaskStatus[]>([])

export const setSelectedStatusesForTasksAtom = atom(
    null,
    (_, set, action: StatusesReducerAction<TaskStatus>) => {
        set(selectedStatusesForTasksAtom, statusesReducer(action))
    }
)

function filterProjectsByStatuses(tasks: Project[], selectedStatuses: ProjectStatus[]) {
    return tasks.filter((t) => selectedStatuses.includes(t.status))
}

export const selectedStatusesForProjectsAtom = atom<ProjectStatus[]>([])

export const setSelectedStatusesForProjectsAtom = atom(
    null,
    (get, set, action: StatusesReducerAction<ProjectStatus>) => {
        if (action.type === 'reset') {
            const projects = get(projectsAtom)

            set(selectedStatusesForProjectsAtom, [])
            set(filteredProjectsAtom, projects)

            return
        }

        if (action.type === 'set') {
            const values = action.payload

            set(selectedStatusesForProjectsAtom, values)

            if (values.length > 0) {
                const projects = get(projectsAtom)

                set(filteredProjectsAtom, filterProjectsByStatuses(projects, values))
            }

            return
        }

        throw new Error("invalid action")
    }
)
