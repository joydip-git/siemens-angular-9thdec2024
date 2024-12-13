import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosService } from '../services/todos.service';
import { provideHttpClient } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    //HttpClientModule
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
    {
      provide: 'SERVICE_TOKEN',
      useClass: TodosService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
