import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Users } from "../models/users.model";
//import { Observable } from "rxjs/Observable";
import { AppState } from "../modules/app.state";
import { GetUsersList } from "../modules/users/user.actions";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  title = "Testing";
  userList: any[];
  constructor(private store: Store<AppState>) {
    store.select("users").subscribe(users => {
      this.userList = users;
    });
  }

  ngOnInit() {}
  getList(e) {
    const list = [
      { id: 1, name: "Prashant", description: "description herer" },
      { id: 2, name: "tushar", description: "description herer" }
    ];
    this.store.dispatch(new GetUsersList(list));
  }
}
