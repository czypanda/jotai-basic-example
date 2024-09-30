import { useState } from "react";
import {
    Button,
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogTrigger,
    MultiSelectPills
} from "@artstorefronts/ui"

interface Props {
    defaultStatuses: string[],
    selectedStatuses: string[],
    onFiltersApply: (filters: string[]) => void,
    onFiltersReset: () => void
}

function TasksFilters({ defaultStatuses, selectedStatuses, onFiltersApply, onFiltersReset }: Props) {
    const [statuses, setStatuses] = useState<string[]>(selectedStatuses);

    const handleMultiSelectChange = (selectedOptions: string[]) => {
        setStatuses(selectedOptions)
    }

    const handleApplyFiltersButtonClick = () => {
        onFiltersApply(statuses)
    }

    const handleResetButtonClick = () => {
        onFiltersReset()
    }

    return <>
        <MultiSelectPills
            maxSelected={defaultStatuses.length}
            onChange={handleMultiSelectChange}
            options={defaultStatuses}
            selectedOptions={statuses}
        />

        <DialogFooter>
            <DialogClose>
                <Button onClick={handleApplyFiltersButtonClick}>Apply</Button>
            </DialogClose>
            <DialogClose>
                <Button onClick={handleResetButtonClick}>Reset</Button>
            </DialogClose>
        </DialogFooter>
    </>
}

export function TasksFiltersDialog(props: Props) {
    return <Dialog>
        <DialogTrigger>
            <Button>Filters</Button>
        </DialogTrigger>

        <DialogContent>
            <TasksFilters {...props} />
        </DialogContent>
    </Dialog>
}
