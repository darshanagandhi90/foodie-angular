import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	data: any = [
		{
			id: 1,
			path: 'assets/images/donats1.jpg',
		},
		{
			id: 2,
			path: 'assets/images/cake2.jpg',
		},
		{
			id: 3,
			path: 'assets/images/pastry1.jpg',
		},
	];
	currentPic;
	prevPic;
	nextPic;
	constructor() {}

	ngOnInit() {
		this.prevPic = this.data[0];
		this.currentPic = this.data[1];
		this.nextPic = this.data[2];
	}
	prevClick() {}
	nextClick() {}
}
