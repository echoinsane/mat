import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'app.style.less'
  ],
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // console.log(window.database);
  }

}
