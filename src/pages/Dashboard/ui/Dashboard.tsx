import { Projects } from "./Projects";
import { Tasks } from "./Tasks";

export function Dashboard () {
    return <div className="flex flex-row space-x-4 h-full w-full">
        <Projects />

        <Tasks />
    </div>
};
