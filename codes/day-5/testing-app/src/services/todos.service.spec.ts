import { provideHttpClient } from "@angular/common/http";
import { TodosService } from "./todos.service"
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Todo } from "../models/todo";

describe(
    'TodosServiceTest',
    () => {

        //let svc: TodosService | null;
        let spySvc: jasmine.SpyObj<TodosService> | null;
        let todosSvc: TodosService | null;
        const sampleData: Todo[] = [{
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        }
        ]
        beforeEach(
            async () => {
                spySvc = jasmine.createSpyObj<TodosService>('TodosService', ['getAll'])
                spySvc.getAll.and.returnValue(of(sampleData))
                //arrange
                await TestBed.configureTestingModule({
                    providers: [
                        provideHttpClient(),
                        {
                            provide: TodosService,
                            useValue: spySvc
                        },
                        //TodosService
                        // {
                        //     provide: TodosService,
                        //     useClass: TodosService
                        // }
                    ]
                })

                todosSvc = TestBed.inject(TodosService)
            }
        )

        afterEach(
            () => {
                spySvc = null
            }
        )

        it(
            '#testing getAll returns all the todos or not',
            (notify: DoneFn) => {
                const obs = todosSvc?.getAll()
                obs?.subscribe(
                    {
                        next: (response) => {
                            console.log('records: ' + response.length);
                            expect(response.length).toBe(3)
                            notify()
                        },
                        error: (e) => {
                            fail(e.message)
                        }
                    }
                )
            }
        )
    }
)