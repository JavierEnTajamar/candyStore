import { Injectable } from "@angular/core";
import { Caramelo } from "./caramelo.model";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class Model {
    private caramelo: Caramelo[] = new Array<Caramelo>();
    private locator = (f: Caramelo, id: number) => f.id == id;

    constructor(private dataSource: RestDataSource) {
        //this.caramelo = new Array<Caramelo>();
        //this.dataSource.getData().forEach(f => this.caramelo.push(f));
        this.dataSource.getData().subscribe(data => this.caramelo = data);
    }

    getCaramelos(): Caramelo[] {
        return this.caramelo;
    }

    getCaramelo(id: number): any {
        return this.caramelo.find(p => this.locator(p, id));
    }
    saveCaramelo(caramelo: any) {
        if (caramelo.id == 0 || caramelo.id == null) {
            caramelo.id = this.generateID();
            this.caramelo.push(caramelo);
        } else {
            let index = this.caramelo
                .findIndex(p => this.locator(p, caramelo.id));
            this.caramelo.splice(index, 1, caramelo);
        }
    }

    deleteCaramelo(id: number) {
        let index = this.caramelo.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.caramelo.splice(index, 1);
        }
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getCaramelo(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
}
