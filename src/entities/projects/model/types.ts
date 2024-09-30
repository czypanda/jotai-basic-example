export enum ProjectStatus {
    NEW = 'new',
    IN_PROGRESS = 'in progress',
    DONE = 'done',
    CANCELLED = 'cancelled'
}

export interface Project {
    id: number;
    title: string;
    status: ProjectStatus
}
