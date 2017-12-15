import { Component, Input } from '@angular/core';

@Component({
	selector: 'timeline-item',
	templateUrl: './timelineItem.template.html',
	styleUrls: ['./timelineItem.style.less'],
})
export class TimelineItemComponent {
	@Input() item;
	@Input() index;
}
