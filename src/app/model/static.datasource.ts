import { Injectable } from "@angular/core";
import { Caramelo } from "./caramelo.model";

@Injectable()
export class StaticDataSource {
    private data: Caramelo[];

    constructor() {
        this.data = new Array<Caramelo>(
            new Caramelo(1, "Historia del arte", "Ciencias", 2),
            new Caramelo(2, "Algebra", "Matemáticas", 3),
            new Caramelo(3, "Bioquimica", "Ciencias", 4),
            new Caramelo(4, "Dictado", "Lengua", 5),
            new Caramelo(5, "Angular", "Informática", 6));
    }

    getData(): Caramelo[] {
        return this.data;
    }
}
