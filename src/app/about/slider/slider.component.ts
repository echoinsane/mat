import { Component, ElementRef, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { persons} from './persons';

import { IPerson } from '../../../model/IPerson';

const LEFT = 'left';
const RIGHT = 'right';
const STATIC = 'static';
const WIDTH = '392px';
const ANIMATION_TIME = '500ms';

@Component({
	selector: 'slider',
	templateUrl: './slider.template.html',
	styleUrls: ['./slider.style.less'],
	animations: [
		trigger('slide', [
			state(STATIC, style({transform: 'translateX(0px)'})),
			state(LEFT, style({transform: 'translateX(392px)'})),
			state(RIGHT, style({transform: 'translateX(-392px)'})),
			transition(`${STATIC} => ${LEFT}`, animate(`${ANIMATION_TIME} ease-in-out`)),
			transition(`${STATIC} => ${RIGHT}`, animate(`${ANIMATION_TIME} ease-in-out`))
		])
	]
})
export class SliderComponent {
	@ViewChild('gallery') gallery: ElementRef;
	persons: IPerson[] = persons;
	slideState = STATIC;

	private currentPerson = [1, 2, 3];

	move(direction: string) {
		const symbol = this.getSymbol(direction);

		if (this.slideState === STATIC) {

			if (direction === LEFT) {
				this.manageLeft();
			}

			if (direction === RIGHT) {
				this.manageRight();
			}

			this.gallery.nativeElement.style[direction] = symbol + WIDTH;
			this.slideState = direction;
		}
	}

	animationDone(event) {
		if (event.toState === LEFT) {
			this.persons.pop();
			this.slideState = STATIC;
			this.gallery.nativeElement.style.left = '0';

			return;
		} else if (event.toState === RIGHT) {
			this.persons.shift();
			this.slideState = STATIC;
			this.gallery.nativeElement.style.right = '0';
		}
	}

	private manageLeft() {
		const last = this.persons[this.persons.length - 1];

		this.persons.unshift(last);
		this.currentPerson.unshift(last.id);
		this.currentPerson.pop();
	}

	private manageRight() {
		const first = this.persons[0];

		this.persons.push(first);
		this.currentPerson.push(first.id);
		this.currentPerson.shift();
	}

	private getSymbol(direction: string): string {
		return direction === LEFT ? '-' : '+';
	}
}
