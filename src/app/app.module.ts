import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {FooterComponent} from './footer/footer.component';
import {HomeModule} from './home/home.module';
import {AboutUsComponent} from './about-us/about-us.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		NavigationBarComponent,
		FooterComponent,
		AboutUsComponent,
	],
	imports: [CommonModule, BrowserModule, AppRoutingModule, HomeModule],
	providers: [],
	bootstrap: [AppComponent],
	exports: [],
})
export class AppModule {}
