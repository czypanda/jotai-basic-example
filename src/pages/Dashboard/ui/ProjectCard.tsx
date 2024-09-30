import { useAtom } from "jotai";
import { Button } from "@artstorefronts/ui";

import { Project, selectedProjectAtom } from "entities/projects";

export function ProjectCard ({ project }: { project: Project }) {
    const [selectedProjectId, setSelectedProjectId] = useAtom(selectedProjectAtom)

    const handleClick = () => {
        setSelectedProjectId(project.id)
    }

    return <Button
      className="w-full"
      variant={selectedProjectId === project.id ? "secondary" : "ghost"}
      onClick={handleClick}
    >
        {project.title}
    </Button>
}
