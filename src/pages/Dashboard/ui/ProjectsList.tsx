import { Project } from "entities/projects";

import { ProjectCard } from "./ProjectCard";

export function ProjectsList ({ projects }: { projects: Project[] }) {
    return projects.map((p) => <ProjectCard key={p.id} project={p} />)
}