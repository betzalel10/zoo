import { Component, OnInit } from '@angular/core';
import { BirdService } from 'src/app/service/bird.service';

@Component({
  selector: 'app-bird-card',
  templateUrl: './bird-card.component.html',
  styleUrls: ['./bird-card.component.css']
})
export class BirdCardComponent implements OnInit {

  constructor(public birdSvc:BirdService) {
    console.log('BirdCardComponent ctor');
    
   }

  ngOnInit() {
    console.log('BirdCardComponent ngOnInit');
    
  }

}
