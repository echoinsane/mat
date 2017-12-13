import {Component, Input} from '@angular/core';
import {IProject} from "../../../model/IProject";

@Component({
  selector: 'project',
  templateUrl: './project.template.html',
  styleUrls: ['./project.style.less']
})
export class ProjectComponent {
  @Input() project: IProject;
}
