import {Component, Input} from '@angular/core';
import {IProject} from "../projects";

@Component({
  selector: 'project',
  templateUrl: './project.template.html',
  styleUrls: ['./project.style.less']
})
export class ProjectComponent {
  @Input() project: IProject;
}
