import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  expandNavigation = false;

  openCloseNavigation(event) {
    if (event) {
      this.expandNavigation = true;
    } else {
      this.expandNavigation = false;
    }
  }
}
