export enum TaskStatus {
    NEW = 'new',
    IN_PROGRESS = 'in progress',
    DONE = 'done',
    CANCELLED = 'cancelled'
}

export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus
}
