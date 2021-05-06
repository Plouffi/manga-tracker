import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { LibraryComponent } from "./library/library.component";
import { MangaItemComponent } from "./manga-item/manga-item.component";
import { FormComponent } from "./form/form.component";
import { AddSerieService } from "./add-serie.service";
import { MangaDetailComponent } from "./manga-detail/manga-detail.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: LibraryComponent },
      { path: "add", component: FormComponent },
      { path: "manga/:mangaId", component: MangaDetailComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    LibraryComponent,
    MangaItemComponent,
    FormComponent,
    MangaDetailComponent
  ],
  bootstrap: [AppComponent],
  providers: [AddSerieService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
