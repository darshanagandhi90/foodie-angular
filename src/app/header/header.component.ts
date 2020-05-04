import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Output() navigationEmitter = new EventEmitter();
  isNavigationOpen: boolean = false;
  ngOnInit() {}
  openCloseNavigation() {
    this.isNavigationOpen = !this.isNavigationOpen;
    this.navigationEmitter.emit(this.isNavigationOpen);
  }
}
