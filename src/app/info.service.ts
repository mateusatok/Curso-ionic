import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
	
	person1 = 'Lucas';
	person2 = 'Iara';
	
	changeNames(){
		const temp = this.person1;
		this.person1 = this.person2;
		this.person2 = temp;

	
	}
	
	
	
	
  constructor() { }
}
