import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CalculatorComponent } from "./calculator/calculator.component";

@NgModule({
    //register components, pipes, direcrives 
    declarations: [AppComponent, CalculatorComponent],
    //register services
    providers: [],
    //register other feature modules of this app or angular's built-in modules
    imports: [BrowserModule],
    // bootstrap: [AppComponent, CalculatorComponent]
    bootstrap: [AppComponent]
})
export class AppModule {

}