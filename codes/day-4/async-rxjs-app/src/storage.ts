import { BehaviorSubject } from "rxjs";

export class StorageService {
    private static svc: StorageService | null = null;

    private storage = new BehaviorSubject<number>(0)
    public valueObservable = this.storage.asObservable()

    private constructor() {
        console.log('singleton instance...')
    }

    static create(): StorageService {
        if (this.svc === null) {
            this.svc = new StorageService()
        }
        return this.svc
    }
    publish(value: number) {
        this.storage.next(value)
    }
}
