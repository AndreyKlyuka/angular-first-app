import { Component, OnInit } from '@angular/core'
import { Observable, tap } from 'rxjs'
import { IProduct } from './models/product'
import { ModalService } from './services/modal.service'
import { ProductService } from './services/product.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'app works!'
    // products: IProduct[] = []
    // products$: Observable<IProduct[]>
    loading: boolean = false
    term = ''

    constructor(
        public productsService: ProductService,
        public modalService: ModalService
    ) {}

    ngOnInit(): void {
        this.loading = true
        this.productsService.getData().subscribe(() => {
            this.loading = false
        })
        // this.products$ = this.productsService
        //     .getData()
        //     .pipe(tap(() => (this.loading = false)))
    }
}
