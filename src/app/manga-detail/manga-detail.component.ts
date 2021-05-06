import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { mangas } from "../mangas";
@Component({
  selector: "app-manga-detail",
  templateUrl: "./manga-detail.component.html",
  styleUrls: ["./manga-detail.component.css"]
})
export class MangaDetailComponent implements OnInit {
  mangas = mangas;
  manga;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const mangaIdFromRoute = Number(routeParams.get("mangaId"));

    // Find the product that correspond with the id provided in route.
    this.manga = mangas.find(manga => manga.id === mangaIdFromRoute);
  }
}
