import {Component} from '@angular/core';

@Component({
	selector: 'loader',
	templateUrl: './loader.template.html',
	styleUrls: ['./loader.style.less'],
})
export class LoaderComponent {
	imgList = {
		logo: './app/components/uiHeader/images/logo.svg'
	};
}
