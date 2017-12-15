import { AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IProject } from '../../../model/IProject';

@Component({
	selector: 'project',
	templateUrl: './project.template.html',
	styleUrls: ['./project.style.less'],
	animations: [
		trigger('popIn', [
			state('hide', style({opacity: '0', transform: 'scale(0.5)'})),
			state('show', style({opacity: '1', transform: 'scale(1)'})),
			transition('hide <=> show', animate(550))
		])
	]
})
export class ProjectComponent implements AfterViewInit {
	@Input() project: IProject;
	isShow = 'hide';
	loader = true;

	constructor(private changeDetection: ChangeDetectorRef) {}

	ngAfterViewInit() {
		this.isShow = 'show';
		this.loader = false;
		this.changeDetection.detectChanges();
	}
}
