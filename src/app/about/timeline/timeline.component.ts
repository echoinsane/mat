import {Component} from '@angular/core';
import {items} from './items';

@Component({
	selector: 'timeline',
	templateUrl: './timeline.template.html',
	styleUrls: ['./timeline.style.less'],
})
export class TimelineComponent {
	items = items;
}
