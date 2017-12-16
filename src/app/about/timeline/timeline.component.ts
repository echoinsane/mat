import {Component} from '@angular/core';

import {items} from './items';

import { ITimelineItem } from '../../../model/ITimelineItem';

@Component({
	selector: 'timeline',
	templateUrl: './timeline.template.html',
	styleUrls: ['./timeline.style.less'],
})
export class TimelineComponent {
	items: ITimelineItem[] = items;
}
