import { NgModule } from '@angular/core'
import { StarComponent} from '../shared/star.component'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { CommonModule } from '@angular/common'

@NgModule({
    declarations: [
        StarComponent
    ],
    imports: [
        CommonModule,         
    ],    
    exports: [
        CommonModule,
        FormsModule,
        StarComponent
    ]
})
export class SharedModule{

}