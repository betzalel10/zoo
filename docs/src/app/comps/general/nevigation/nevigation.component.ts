import { Component, OnInit } from '@angular/core';
import { PagingService } from '../../../service/paging.service';

@Component({
  selector: 'app-nevigation',
  templateUrl: './nevigation.component.html',
  styleUrls: ['./nevigation.component.css']
})
export class NevigationComponent implements OnInit {

  constructor(public paging:PagingService) { }

  ngOnInit() {
  }

  navTo(pagename:string):void{
    console.log(`navTo( ${ pagename} )`);
    this.paging.currentPanel = pagename;
  }
}
