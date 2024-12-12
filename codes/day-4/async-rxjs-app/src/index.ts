// import { getValues } from "./consumer";
// import { publishValue } from "./publisher";
import { StorageService } from "./storage";

/*
import { Observable, of } from "rxjs";

const numbers = [1, 2, 3, 4]
const obs: Observable<number[]> = of(numbers)

obs
    .subscribe({
        next: (value) => {
            console.log(value);
        },
        error: (e) => {
            console.log(e);
        },
        complete: () => {
            console.log('something else');
        }
    })

*/
const storageService = StorageService.create()
StorageService.create()
StorageService.create()
StorageService.create()

//subscription
//getValues()
storageService
    .valueObservable
    .subscribe(
        {
            next: (value) => {
                console.log("Consumer: " + value);
            },
            error: (e) => console.log(e),
            complete: () => console.log('next task to do')
        }
    )

//publishing
let value = 10
setInterval(
    () => {
        //publishValue(value)
        console.log("publishing: " + value);
        //publishValue(value)
        storageService.publish(value)
        ++value
    },
    1000
)

