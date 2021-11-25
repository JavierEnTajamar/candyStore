import { Component } from "@angular/core";
import { Caramelo } from "../model/caramelo.model";
import { Model } from "../model/repository.model";

@Component({
    selector: "foTable",
    templateUrl: "table.component.html"
})
export class TableComponent {
    capacidad: number = 20000;

    constructor(private model: Model) { }
    getCaramelo(key: number): Caramelo {
        return this.model.getCaramelo(key);
    }

    getCaramelos(): Caramelo[] {
        return this.model.getCaramelos();
    }

    deleteCaramelo(key: any) {
        this.model.deleteCaramelo(key);
    }

}
