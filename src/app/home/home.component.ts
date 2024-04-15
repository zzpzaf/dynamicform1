import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	appHeaderTitle: string = "Dynamic, flexible reactive form demo"
	myInfo:string = " (C) 2024 Panos Zafeiropoulos "

}


