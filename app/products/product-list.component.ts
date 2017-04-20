import { Component, OnInit } from '@angular/core'
import {IProduct} from './products'
import {ProductService} from './product-service'

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

    constructor(private _productService: ProductService){

    }
    pagetitle: string = "Product List!"
    ratingMessage: string = ''
    imageWidth: number = 50
    imageMargin:  number = 2
    products: IProduct[]
    showImage: boolean = false
    listFilter: string = ''
    errorMessage: string

    toggleImage(): void {
        this.showImage = !this.showImage
       
    }

    ngOnInit(): void{
        console.log('I am inside OnInit');
        //this.products = this._productService.getProducts()
        this._productService.getProducts().
            subscribe(
                products => this.products=products,
                error => this.errorMessage = <any>error
                )
    }

    onRatingClicked(message: string): void{
       this.ratingMessage = message
    }
}