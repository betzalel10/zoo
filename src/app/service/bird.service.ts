import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BirdService {

  constructor(private http:HttpClient) {
    
    http.get('https://raw.githubusercontent.com/betzalel10/zoo/master/docs/src/assets/bird.json')
    .subscribe(data => {
      this.birds = data as Animal[]
      this.currentBird = this.birds[0]
    })
    
   }

   birds:Animal[] = []

  //  birds=[
  //   {name:'Owl', size:'40cm', lifeSpan:'27y',habitat:'israel' ,img:'http://eliotkitty.e.l.pic.centerblog.net/fa521637.gif'},
  //   {name:'Peacock', size:'70cm', lifeSpan:'15y',habitat:'India' ,img:'https://media.giphy.com/media/TcVuf0SIzbhIY/giphy.gif'},
  //   {name:'Eagle', size:'110cm', lifeSpan:'45y',habitat:'africa' ,img:'https://i.gifer.com/56iv.gif'},
  //   {name:'Parrot', size:'45cm', lifeSpan:'20y',habitat:'south America' ,img:'https://media3.giphy.com/media/aTWLVsvacZMVq/source.gif'},
  //   {name:'Flamingo', size:'150cm', lifeSpan:'50y',habitat:'Chile' ,img:'https://laughingsquid.com/wp-content/uploads/2017/03/roster-flamingo.gif'},
  //  ]

   currentBirdIndex = 0
   currentBird:Animal
 }
