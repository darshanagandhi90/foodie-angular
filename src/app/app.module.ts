import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {FooterComponent} from './footer/footer.component';
import {HomeModule} from './home/home.module';
import {AboutUsComponent} from './about-us/about-us.component';
import {CategoryComponent} from './category/category.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		NavigationBarComponent,
		FooterComponent,
		AboutUsComponent,
		CategoryComponent,
	],
	imports: [CommonModule, BrowserModule, FormsModule, AppRoutingModule, HomeModule],
	providers: [],
	bootstrap: [AppComponent],
	exports: [],
})
export class AppModule {}
