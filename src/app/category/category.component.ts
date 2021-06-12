import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
	xPos: string;
	yPos: string;
	isCommentSectionVisible: boolean = false;
	commentValue: string;
	emptyCommentBox = '';
	commentsList = [];

	constructor() {}

	ngOnInit() {}

	imagesClick(e) {
		this.xPos = e.pageX + 'px';
		this.yPos = e.pageY + 'px';
		this.isCommentSectionVisible = true;
	}

	addCommentValue(e) {
		this.commentValue = this.emptyCommentBox;
		console.log('xPos:', this.xPos, ' yPos:', this.yPos);

		this.commentsList.push({
			label: this.commentValue,
			width: this.xPos,
			height: this.yPos,
		});
		console.log(this.commentsList);

		this.isCommentSectionVisible = false;
		this.emptyCommentBox = '';
	}
}
