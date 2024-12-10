export interface Person {
    id: number;
    name: string;
    salary: number;
    departmentName?: string;
}

export const anilPerson: Person = {
    id: 1,
    name: 'anil',
    salary: 1000
}