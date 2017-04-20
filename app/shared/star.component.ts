import {Component, Input, OnChanges, OnInit, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnInit{
    starWidth: number
    @Input() rating: number = 4
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()

    // ngOnChanges(): void{
    //     this.starWidth = 86 / 5 * this.rating
    // }

    ngOnInit(): void{
        this.starWidth = 86 / 5 * this.rating
    }

    onClick(): void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`)
    }
}