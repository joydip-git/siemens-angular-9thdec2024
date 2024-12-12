import { StorageService } from "./storage";

const storage = StorageService.create()

export function getValues() {
    storage
        .valueObservable
        .subscribe(
            {
                next: (values) => {
                    console.log(values);
                },
                error: (e) => console.log(e),
                complete: () => console.log('next task to do')
            }
        )
}