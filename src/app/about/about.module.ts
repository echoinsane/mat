import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { UiHeaderModule } from '../components/uiHeader/uiHeader.module';

@NgModule({
	imports: [
		UiHeaderModule,
		CommonModule
	],
	declarations: [
		AboutComponent
	],
	exports: [
		AboutComponent
	]
})
export class AboutModule {
}
