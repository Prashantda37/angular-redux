import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

// Store
import { StoreModule } from "@ngrx/store";
//import { users } from "./modules/app.reducers";
import { reducerUser } from "./modules/users/user.reducers";
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ users: reducerUser })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
