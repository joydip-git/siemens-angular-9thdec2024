import { provideHttpClient } from "@angular/common/http";
import { TodosService } from "./todos.service"
import { TestBed } from "@angular/core/testing";

describe(
    'TodosServiceTest',
    () => {

        let svc: TodosService | null;
        beforeEach(
            async () => {
                //arrange
                await TestBed.configureTestingModule({
                    providers: [
                        provideHttpClient(),
                        TodosService
                    ]
                })
                svc = TestBed.inject(TodosService)
            }
        )

        afterEach(
            () => {
                svc = null
            }
        )

        it(
            '#testing getAll returns all the todos or not',
            (notify: DoneFn) => {
                const obs = svc?.getAll()
                obs?.subscribe(
                    {
                        next: (response) => {
                            expect(response.length).toBe(200)
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