import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { UiHeaderModule } from '../components/uiHeader/uiHeader.module';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineItemComponent } from './timeline/timelineItem/timelineItem.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
	imports: [
		UiHeaderModule,
		CommonModule
	],
	declarations: [
		AboutComponent,
		TimelineComponent,
		TimelineItemComponent,
		SliderComponent
	],
	exports: [
		AboutComponent
	]
})
export class AboutModule {
}
