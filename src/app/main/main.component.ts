import * as firebase from 'firebase';
import {Observable} from "rxjs";
import {Component, OnInit} from '@angular/core';
import {IProject} from '../../model/IProject';
import {AngularFireDatabase} from "angularfire2/database";

@Component({
	selector: 'main',
	templateUrl: 'main.template.html',
	styleUrls: ['main.style.less']
})
export class MainComponent implements OnInit {
	projects: IProject[];

	constructor(private firebaseDatabase: AngularFireDatabase) {}

	ngOnInit() {
		this.firebaseDatabase.list('main/weddings').valueChanges()
			.subscribe((list: IProject[]) => this.getImages(list));
	}

	private getImages(list: IProject[]) {
		const observablesArray = [];

		list.forEach(item => {
			const observable = Observable.fromPromise(firebase.storage().ref(item.image).getDownloadURL());

			observablesArray.push(observable);
		});

		Observable.zip(...observablesArray)
			.subscribe((resultArray: string[]) => this.setImages(resultArray, list));
	}

	private setImages(resultArray: string[], list: IProject[]) {
		resultArray.forEach((result: string, key: number) => {
			list[key].image = result;
		});

		this.projects = list;
	}
}
