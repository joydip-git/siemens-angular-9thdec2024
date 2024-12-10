import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
    //template: ``,
})
export class AppComponent {
    welcomeMessage = 'Welcome to Angular'
    width = 300

    // updateWelcomeMessage(message: string) {
    //     this.welcomeMessage = message
    // }
    updateWelcomeMessage(eventObj: any) {
        const inputElement = eventObj.target as HTMLInputElement;
        // console.log(inputElement.value);
        this.welcomeMessage = inputElement.value
    }

    clicked(eventObj: any) {
        console.log(eventObj.target);
    }
}