import { Component, OnInit } from '@angular/core';

import { BirdService } from 'src/app/service/bird.service';

@Component({
  selector: 'app-birds-panel',
  templateUrl: './birds-panel.component.html',
  styleUrls: ['./birds-panel.component.css']
})
export class BirdsPanelComponent implements OnInit {

  constructor(public birdSvc:BirdService) { }

  ngOnInit() {
  }

}
