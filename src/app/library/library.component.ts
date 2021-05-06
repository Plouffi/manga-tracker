import { Component, OnInit } from "@angular/core";
import { mangas } from "../mangas";

@Component({
  selector: "app-library",
  templateUrl: "./library.component.html",
  styleUrls: ["./library.component.css"]
})
export class LibraryComponent implements OnInit {
  mangas = mangas;

  constructor() {}

  ngOnInit() {}
}
