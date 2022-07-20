import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs'
import { IProduct } from '../models/product'

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}

    getData(): Observable<IProduct[]> {
        return this.http
            .get<IProduct[]>('https://fakestoreapi.com/products', {
                params: new HttpParams({
                    fromObject: { limit: 5 },
                }),
            })
            .pipe(catchError(this.errorHandler))
    }

    private errorHandler(error: HttpErrorResponse) {
        return throwError(() => error.message)
    }
}
