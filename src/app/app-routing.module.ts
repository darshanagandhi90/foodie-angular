import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {CategoryComponent} from './category/category.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then((mod) => mod.HomeModule),
	},
	{
		path: 'about-us',
		component: AboutUsComponent,
	},
	{
		path: 'category',
		component: CategoryComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
