import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from './product-filter.pipe'
import { ProductDetailComponent } from './product-detail.component'
import { ProductService } from './product-service'
import { ProductDetailGuard } from './product-guard.service'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { SharedModule } from '../shared/shared.module'

@NgModule({
    imports: [
        CommonModule,
        FormsModule, 
        HttpModule,
        SharedModule,
        RouterModule.forRoot([
        {path: 'products', component: ProductListComponent},
        {path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent}
        ])], 
    declarations: [
        ProductListComponent, 
        ProductFilterPipe, 
        ProductDetailComponent],
    providers: [
        ProductService, 
        ProductDetailGuard
    ]
})
export class ProductModule{

}