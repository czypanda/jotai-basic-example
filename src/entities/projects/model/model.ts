import { atom } from "jotai";

import { Project } from "./types";
import { projects } from "./fake-data";

export const selectedProjectAtom = atom<Project["id"] | null>(1)

export const projectsAtom = atom<Project[]>(projects)
