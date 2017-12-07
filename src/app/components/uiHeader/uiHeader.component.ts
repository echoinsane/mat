import {Component, Input} from '@angular/core';

@Component({
  selector: 'ui-header',
  templateUrl: './uiHeader.template.html',
  styleUrls: ['./uiHeader.style.less'],
})
export class UiHeaderComponent {
  @Input() text: string;
  @Input() img: string;

  imgList = {
    logo: './app/components/uiHeader/images/logo.svg'
  };
}
