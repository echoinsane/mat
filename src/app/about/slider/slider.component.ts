import { Component, ElementRef, ViewChild } from '@angular/core';

import { persons} from './persons';

import { IPerson } from '../../../model/IPerson';

@Component({
	selector: 'slider',
	templateUrl: './slider.template.html',
	styleUrls: ['./slider.style.less'],
})
export class SliderComponent {
	@ViewChild('gallery') gallery: ElementRef;
	persons: IPerson[] = persons;
	private currentPerson = [1, 2, 3];

	left() {
		const lastId = this.currentPerson[this.currentPerson.length - 1];
		const firstId = this.currentPerson[0];

		if (firstId === this.persons[0].id) {
			this.persons.unshift(this.persons[this.persons.length - 1]);
			this.currentPerson.unshift(this.persons[this.persons.length - 1].id);
			this.currentPerson.pop();

			// this.gallery.nativeElement.style({transform: 'translateX(-350px)'});
			this.persons.pop();
		}


	}

	right() {
		const lastId = this.currentPerson[this.currentPerson.length - 1];
		const firstId = this.currentPerson[0];

		if (lastId === this.persons[this.persons.length - 1].id) {
			this.persons.push(this.persons[0]);
			this.currentPerson.push(this.persons[0].id);
			this.currentPerson.shift();

			// this.gallery.nativeElement.style({transform: 'translateX(-350px)'});
			this.persons.shift();
		}
	}
}
