import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Caramelo } from "../model/caramelo.model";
import { Model } from "../model/repository.model"

@Component({
    selector: "foForm",
    templateUrl: "form.component.html",
})
export class FormComponent {
    caramelo: Caramelo = new Caramelo();

    constructor(private model: Model) { }

    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveCaramelo(this.caramelo);
            this.caramelo = new Caramelo();
            form.reset();
        }
    }

    resetForm() {
        this.caramelo = new Caramelo();
    }
}
