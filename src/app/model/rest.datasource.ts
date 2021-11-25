import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, } from "rxjs";
import { Caramelo } from "./caramelo.model";

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource {
    constructor(private http: HttpClient,
        @Inject(REST_URL) private url: string) { }

    getData(): Observable<Caramelo[]> {
        return this.sendRequest<Caramelo[]>("GET", this.url);
    }

    saveCaramelo(caramelo: Caramelo): Observable<Caramelo> {
        return this.sendRequest<Caramelo>("POST", this.url, caramelo);
    }

    deleteProduct(id: number): Observable<Caramelo> {
        return this.sendRequest<Caramelo>("DELETE", `${this.url}/${id}`);
    }
    private sendRequest<T>(verb: string, url: string, body?: Caramelo): Observable<T> {
        return this.http.request<T>(verb, url, {
            body: body
        });
    }
}
