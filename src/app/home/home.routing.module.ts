import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CakeComponent} from './cake/cake.component';
import {HomeComponent} from './home.component';
import {DessertComponent} from './dessert/dessert.component';
const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: '',
				component: CakeComponent,
			},
			{
				path: 'cake',
				component: CakeComponent,
			},
			{
				path: 'dessert',
				component: DessertComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	entryComponents: [HomeComponent],
})
export class HomeRoutingModule {}
