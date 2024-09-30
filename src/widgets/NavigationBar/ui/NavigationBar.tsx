import { useAtom } from "jotai"

import { statsAtom } from "../model";

export function NavigationBar () {
    const [{ projectsDone, projectsInProgress }] = useAtom(statsAtom);

    return <div className="p-6 rounded-lg flex flex-row bg-white justify-between border" >
        <h1 className="text-2xl font-semibold leading-none tracking-tight">Dashboard</h1>

        <div className="flex flex-col">
            <span>Projects done: {projectsDone}</span>
            <span>Projects in progress: {projectsInProgress}</span>
        </div>

        <div>Logo placeholder</div>
    </div>
}
