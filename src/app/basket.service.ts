import { Injectable, SystemJsNgModuleLoader } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

timeA = 0;
timeB = 0;
vencedor = "";

increaseTeamA(pontos: number){
  this.timeA += pontos;
}
increaseTeamB(pontos: number){
  this.timeB += pontos;
}

verifyWhoWon(){
  if (this.timeA > this.timeB){
    this.vencedor = "O time A é o vencedor"
    
  } else {
    this.vencedor = "O time B é o vencedor" 
  }
}

resetScore(){
  this.timeA = 0;
  this.timeB = 0;
}

constructor() { }
}
