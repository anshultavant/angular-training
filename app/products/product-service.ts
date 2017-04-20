import {Injectable} from '@angular/core'
import {IProduct} from './products'
import {Http, Response} from '@angular/http'
//import 'rxjs'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
//import 'rxjs/Obserable'

@Injectable()
export class ProductService{

    constructor(private _http: Http){

    }

    //productUrl: string = 'api/products/products.json'
    httpUrl: string = 'https://api.myjson.com/bins/didwf'
    
    getProducts():Observable<IProduct[]>{
        return this._http.
            get(this.httpUrl).
            map((response: Response) =>
                    <IProduct[]>response.json()                
            ).
            do(data => console.log('ALL '+JSON.stringify(data))).
            catch(this.handleError)      
    }

    private handleError(error: Response){
        console.error(error)
        return Observable.throw(error.json().error || 'Server Error')
    }
    /*
    getProducts():IProduct[]{
        return [
            {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "/app/assets/images/cat1.jpg"
            },
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "/app/assets/images/dog1.jpg"
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 1.8,
                "imageUrl": "/app/assets/images/cat1.jpg"
            }
        ]
    }*/
}