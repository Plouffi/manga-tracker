import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { mangas } from './mangas';

@Injectable()
export class AddSerieService {
  mangas = mangas;
  constructor(private http: HttpClient) {}

  addSerie(serie, img: File): void {
    //Solution temporaire
    let lastID = this.mangas[this.mangas.length - 1].id;
    this.mangas.push({
      id: lastID + 1,
      title: serie.title,
      editor: serie.editor,
      list: new Array(serie.nbTome).fill(0)
    });
    /**
     * Besoin d'un backend pour faire une BDD
    this.http.get<{ id: number; title: string; img: string; list: number[] }[]>(
      "/assets/mangas.json"
    );

    const endpoint = "";
    const formData: FormData = new FormData();
    formData.append("fileKey", img, img.name);
    this.http.post(endpoint, formData).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    **/
  }
}
