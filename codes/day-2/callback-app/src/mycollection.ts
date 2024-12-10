import { IOperations } from "./collection";
export class MyCollection<T> implements IOperations<T> {
    items: T[];
    x?: T;

    constructor() {
        this.items = []
    }
    add(item: T) {
        this.items.push(item)
    }
}

const list = new MyCollection<number>()
list.add(12)
//list.add('')