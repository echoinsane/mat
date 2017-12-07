import {Component} from '@angular/core';
import {projects, IProject} from './projects';

@Component({
  selector: 'main',
  templateUrl: 'main.template.html',
  styleUrls: ['main.style.less']
})
export class MainComponent {
  projects: IProject[] = projects;
}
