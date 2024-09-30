import { atom } from "jotai";

import { projectsAtom, ProjectStatus } from "entities/projects";

export const statsAtom = atom((get) => {
    const projects = get(projectsAtom);

    const projectsDone = projects.filter((p) => p.status === ProjectStatus.DONE)
    const projectsInProgress = projects.filter((p) => p.status === ProjectStatus.IN_PROGRESS)

    return {
        projectsDone: projectsDone.length,
        projectsInProgress: projectsInProgress.length
    }
})
