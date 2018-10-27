import { Component } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	
	constructor(public info: InfoService) {
	}

}