export interface PmsAppServiceContract<T> {
    getAll(): T[];
    get(id: number): T | undefined;
}