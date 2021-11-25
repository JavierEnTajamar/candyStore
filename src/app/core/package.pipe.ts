import { Pipe } from "@angular/core";
import { Caramelo } from "../model/caramelo.model";

@Pipe({
    name: "envase",
    pure: false
})
export class CaPackagePipe {

    transform(products: Caramelo[], gramos: number): Caramelo[] {
        return gramos == undefined ?
            products : products.filter(p => p.gramos <= gramos);
    }
}
