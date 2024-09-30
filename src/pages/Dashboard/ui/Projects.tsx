import { useAtom } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "@artstorefronts/ui";

import { ProjectStatus } from "entities/projects";
import { TasksFilters } from "widgets/TasksFilters";

import { ProjectsList } from "./ProjectsList";

import { filteredProjectsAtom, selectedStatusesForProjectsAtom, setSelectedStatusesForProjectsAtom } from "../model";

export function Projects () {
    const [filteredProjects] = useAtom(filteredProjectsAtom)
    const [selectedStatuses] = useAtom(selectedStatusesForProjectsAtom)
    const [, setSelectedStatuses] = useAtom(setSelectedStatusesForProjectsAtom)

    const onFiltersApply = (statuses: string[]) => {
        setSelectedStatuses({ type: "set", payload: statuses as ProjectStatus[]} )
    }

    const onFiltersReset = () => {
        setSelectedStatuses({ type: "reset", payload: [] })
    }

    return <Card>
        <CardHeader className="flex flex-row items-center content-between space-x-2">
            <CardTitle>Projects</CardTitle>

            <TasksFilters
                selectedStatuses={selectedStatuses}
                onFiltersApply={onFiltersApply}
                onFiltersReset={onFiltersReset}
                defaultStatuses={Object.values(ProjectStatus)}
            />
        </CardHeader>
        <CardContent>
            <ProjectsList projects={filteredProjects}/>
        </CardContent>
    </Card>
}
