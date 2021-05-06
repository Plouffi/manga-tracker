import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { AddSerieService } from "../add-serie.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private addSerieService: AddSerieService,
    private router: Router
  ) {}

  img: File = null;
  addForm = this.formBuilder.group({
    title: "",
    nbTome: ""
  });

  ngOnInit() {}

  handleFileInput(target) {
    this.img = target.files.item(0);
  }

  onSubmit(): void {
    this.addSerieService.addSerie(this.addForm.value, this.img);
    console.warn("La série a été ajoutée", this.addForm.value);
    this.addForm.reset();
    this.router.navigate(["/"]);
  }
}
