import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {HomeComponent} from './home.component';
import {CakeComponent} from './cake/cake.component';
import {HomeRoutingModule} from './home.routing.module';
import {RecipeComponent} from './recipe/recipe.component';

@NgModule({
	declarations: [HomeComponent, CakeComponent, RecipeComponent],
	imports: [CommonModule, HomeRoutingModule],
	providers: [],
	exports: [],
})
export class HomeModule {}
