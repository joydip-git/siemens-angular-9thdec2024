import { ComponentFixture, TestBed } from "@angular/core/testing"
import { AppComponent } from "./app.component"

describe(
    "AppComponent Test",
    () => {

        let appCompFixture: ComponentFixture<AppComponent> | null;

        beforeEach(
            async () => {
                await TestBed.configureTestingModule(
                    {
                        declarations: [AppComponent]
                    }
                ).compileComponents()

                appCompFixture = TestBed.createComponent(AppComponent)
            }
        )

        it('title property has value [welcome to unit testing]', () => {
            const appComponent = appCompFixture?.componentInstance
            expect(appComponent?.title).toBe('welcome to unit testing')
        })

        it('h2 displaying [welcome to unit testing]', () => {
            appCompFixture?.detectChanges()
            const template = appCompFixture?.debugElement
            const htmlElement = template?.nativeElement as HTMLElement
            const headerText = htmlElement.querySelector('h2')?.textContent
            expect(headerText).toEqual('welcome to unit testing')
        })

        it('h2 displaying [change detection must be done in unit testing] on button click', () => {
            appCompFixture?.detectChanges()
            const template = appCompFixture?.debugElement
            const htmlElement = template?.nativeElement as HTMLElement
            // const button = htmlElement.querySelector('button') as HTMLButtonElement
            // button.click()

            const appComponent = appCompFixture?.componentInstance
            appComponent?.updateTitle()

            appCompFixture?.detectChanges()
            const headerText = htmlElement.querySelector('h2')?.textContent
            expect(headerText).toEqual('change detection must be done in unit testing')
        })
    }
)