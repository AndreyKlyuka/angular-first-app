import { Component, OnInit } from '@angular/core'
import { IProduct } from './models/product'
import { products as data } from './data/products'
// import { ProductService } from './services/product.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'app works!'

    products: IProduct[] = data

    // constructor(private productsService: ProductService) {}

    ngOnInit(): void {
        throw new Error('Method not implemented.')
    }
}
