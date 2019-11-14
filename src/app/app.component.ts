import { Component } from '@angular/core';

import { BirdService } from 'src/app/service/bird.service';
import { BeastsService } from 'src/app/service/beasts.service';
import { PagingService } from 'src/app/service/paging.service';
import { WildService } from './service/wild.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avra-zoo';

  constructor(public paging:PagingService, public birds:BirdService,
    public beasts:BeastsService, public wilds:WildService){}

  getUp(ev){
    console.log('AppComponent  getUp', ev);

    switch (this.paging.currentPanel) {
      case 'birds':
          let newBirdIndex = this.getNewCuurentIndex(
          this.birds.currentBirdIndex, ev, this.birds.birds)
          this.birds.currentBirdIndex = newBirdIndex
          this.birds.currentBird = this.birds.birds[newBirdIndex]
        break;
      case 'farm animals':
          let newBeastIndex = this.getNewCuurentIndex(
          this.beasts.currentBeastIndex, ev, this.beasts.beasts)
          this.beasts.currentBeastIndex = newBeastIndex
          this.beasts.currentBeast = this.beasts.beasts[newBeastIndex]
        break;
      case 'wild animals':
        let newWildIndex = this.getNewCuurentIndex(
        this.wilds.currentWildIndex, ev, this.wilds.wilds)
        this.wilds.currentWildIndex = newWildIndex
        this.wilds.currentWild = this.wilds.wilds[newWildIndex]
        break;
          
      default:
        break;
    }

  }

  private getNewCuurentIndex(current:number, delta:number, array:{}[]) : number{
    let max = array.length -1;
    let newIndex = current + delta
    if (newIndex > max) {
      newIndex = 0
    }    
    if (newIndex < 0) {
      newIndex = max
    }
    return newIndex
  }

}