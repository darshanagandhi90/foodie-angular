import {Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'app-recipe',
	templateUrl: './recipe.component.html',
	styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
	@Input() recipeData;

	constructor() {}

	ngOnInit() {}
}
