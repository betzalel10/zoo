import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() moveItem:EventEmitter<number> = new EventEmitter<number>()

  moveNextItem(delta:number):void{
    console.log('PaginatorCompnent moveNextItem ' + delta);
    this.moveItem.emit(delta)
    
  }
}
