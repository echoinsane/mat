import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./main.component";
import {ProjectComponent} from "./project/project.component";
import {UiHeaderModule} from "../components/uiHeader/uiHeader.module";
import { LoaderModule } from '../components/loader/loader.module';

@NgModule({
	imports: [
		UiHeaderModule,
		LoaderModule,
		CommonModule
	],
	declarations: [
		MainComponent,
		ProjectComponent
	],
	exports: [
		MainComponent
	]
})
export class MainModule {
}
