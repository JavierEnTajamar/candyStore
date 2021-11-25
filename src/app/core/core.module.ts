import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TableComponent } from "./table.component";
import { FormComponent } from "./form.component";
import { CaPackagePipe } from "./package.pipe";



@NgModule({
    imports: [BrowserModule, FormsModule, ModelModule],
    declarations: [TableComponent, FormComponent, CaPackagePipe],
    exports: [ModelModule, TableComponent, FormComponent],
    providers: []
})
export class CoreModule { }
