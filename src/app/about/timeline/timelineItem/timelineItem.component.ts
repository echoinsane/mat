import { Component, Input, OnInit } from '@angular/core';
import { ITimelineItem } from '../../../../model/ITimelineItem';

@Component({
	selector: 'timeline-item',
	templateUrl: './timelineItem.template.html',
	styleUrls: ['./timelineItem.style.less'],
})
export class TimelineItemComponent implements OnInit {
	@Input() item: ITimelineItem;
	@Input() index;
	isEven: boolean;

	ngOnInit() {
		this.isEven = (this.index % 2) !== 0;
	}
}
