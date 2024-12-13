import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from "./shared/shared.module";
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/routes';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    SharedModule,
    //AppRoutingModule
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
