import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WildService {

  constructor() { }
  wilds=[
    {name:'Lion', size:'120cm', lifeSpan:'20y',habitat:'Africa' ,img:'http://cafe.themarker.com/media/t/276/291/4/file_0.gif'},
    {name:'Elephant', size:'310cm', lifeSpan:'70y',habitat:'Thailand' ,img:'https://img.mako.co.il/2013/12/26/AnimalsPlayingSports14.gif'},
    {name:'Giraffe', size:'600cm', lifeSpan:'30y',habitat:'South Africa' ,img:'https://forum.lametayel.co.il/forum_getfile_large/id-85488/'},
    {name:'Tiger', size:'80cm', lifeSpan:'18y',habitat:'Southeast Asia' ,img:'https://media0.giphy.com/media/R9z50rPINd5ew/source.gif'},
    {name:'Gorilla', size:'170cm', lifeSpan:'34y',habitat:'Uganda' ,img:'https://media1.tenor.com/images/c815396f481f2e27a36f48149cfe27c4/tenor.gif?itemid=10889686'},
    {name:'Panda', size:'180cm', lifeSpan:'20y',habitat:'China' ,img:'https://i.imgur.com/BjsF57h.gif'},
   ]

   currentWildIndex = 0
   currentWild = this.wilds[this.currentWildIndex]
 }


