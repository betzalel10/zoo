import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Animal } from 'src/app/models/animal';


@Injectable({
  providedIn: 'root'
})
export class BeastsService {

  constructor(private http:HttpClient) {
 
    http.get('https://raw.githubusercontent.com/betzalel10/zoo/master/docs/src/assets/animal.json')
    .subscribe(data => {
      this.beasts = data as Animal[]
      this.currentBeast = this.beasts[0]
    })
    
}

beasts:Animal[] =[]

// beasts=[
//   {name:'Horse', size:'180cm', lifeSpan:'30y',habitat:'England' ,img:'https://media1.giphy.com/media/l9mASFqtemeKk/source.gif'},
//   {name:'Cow', size:'150cm', lifeSpan:'10y',habitat:'North Africa' ,img:'https://localtvwqad.files.wordpress.com/2018/04/giphy.gif'},
//   {name:'Sheep', size:'90cm', lifeSpan:'15y',habitat:'Sardinia' ,img:'https://laughingsquid.com/wp-content/uploads/2018/08/Sheep-Goes-for-Ride-on-Tire-Swing.gif'},
//   {name:'Dog', size:'60cm', lifeSpan:'8y',habitat:'Eurasia' ,img:'https://media.giphy.com/media/L63OXnIUDzN9S/giphy-downsized-large.gif'},
//   {name:'Goat', size:'100cm', lifeSpan:'12y',habitat:'Israel' ,img:'https://i.pinimg.com/originals/5d/62/e9/5d62e9133846b036980fdc82e6f6b55b.gif'},
//  ]

 currentBeastIndex = 0
 currentBeast:Animal
//  currentBeast = this.beasts[this.currentBeastIndex]
 }