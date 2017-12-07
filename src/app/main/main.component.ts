import {Component, OnInit} from '@angular/core';
import {projects, IProject} from './projects';

@Component({
  selector: 'main',
  templateUrl: 'main.template.html',
  styleUrls: ['main.style.less']
})
export class MainComponent implements OnInit {
  projects: IProject[];

  ngOnInit() {
    firebase.database().ref().child('main').on('value', snapshot => {
      this.projects = <IProject[]>snapshot.val().weddings;
    });
  }
}
