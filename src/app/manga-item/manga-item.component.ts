import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: "app-manga-item",
  templateUrl: "./manga-item.component.html",
  styleUrls: ["./manga-item.component.css"]
})
export class MangaItemComponent implements OnInit {
  @Input() manga;
  expanded = false;

  constructor() {}

  ngOnInit() {}

  nbTome() {
    return this.manga.list.reduce((sum, x) => sum + x);
  }

  completed() {
    return (
      (this.manga.list.reduce((sum, x) => sum + x) / this.manga.list.length) *
      100
    );
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
