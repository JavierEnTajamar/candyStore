import { NgModule } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { Model } from "./repository.model";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource, REST_URL } from "./rest.datasource";

@NgModule({
    imports: [HttpClientModule],
    providers: [Model, RestDataSource,
        { provide: REST_URL, useValue: `http://localhost:3500/caramelos` }
    ],
})
export class ModelModule { }
