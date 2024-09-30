import { useAtom } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "@artstorefronts/ui";

import { TasksFilters } from "widgets/TasksFilters";

import { TasksList } from "./TasksList";
import { TaskStatus, filteredTasksAtom, selectedStatusesForTasksAtom, setSelectedStatusesForTasksAtom } from "../model";

export function Tasks () {
    const [tasks] = useAtom(filteredTasksAtom);
    const [selectedStatuses] = useAtom(selectedStatusesForTasksAtom)
    const [, setSelectedStatuses] = useAtom(setSelectedStatusesForTasksAtom)

    const onFiltersApply = (statuses: string[]) => {
        setSelectedStatuses({ type: "set", payload: statuses as TaskStatus[]})
    }

    const onFiltersReset = () => {
        setSelectedStatuses({ type: "reset", payload: [] })
    }

    return <Card className="w-full">
        <CardHeader>
            <CardTitle className="flex justify-between items-center">
                Tasks

                <TasksFilters
                    selectedStatuses={selectedStatuses}
                    onFiltersApply={onFiltersApply}
                    onFiltersReset={onFiltersReset}
                    defaultStatuses={Object.values(TaskStatus)}
                />
            </CardTitle>
        </CardHeader>
        <CardContent>
            <TasksList tasks={tasks}/>
        </CardContent>
    </Card>
}
