import { atom } from "jotai"

import { Project, projectsAtom, selectedProjectAtom } from "entities/projects"

import { selectedStatusesForProjectsAtom } from "./filter"

const filteredProjectsReadAtom = atom([] as Project[])

export const filteredProjectsAtom = atom(
    (get) => {
        const filteredProjects = get(filteredProjectsReadAtom)
        const selectedFilters = get(selectedStatusesForProjectsAtom)

        if (filteredProjects.length > 0 || selectedFilters.length > 0) return filteredProjects

        return get(projectsAtom)
    },
    (_, set, values: Project[]) => {
      set(filteredProjectsReadAtom, values);
      set(selectedProjectAtom, values[0]?.id ?? null);
    }
)
