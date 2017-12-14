import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
	NgModule,
	ApplicationRef
} from '@angular/core';
import {
	removeNgStyles,
	createNewHosts,
	createInputTransfer
} from '@angularclass/hmr';
import {RouterModule} from '@angular/router';
import {MainModule} from "./main/main.module";
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from "angularfire2/database";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*
 * Platform and Environment providers/directives/pipes
 */
import {ENV_PROVIDERS, firebase} from './environment';
import {ROUTES} from './app.routes';
// App is our top level component
import {AppComponent} from './app.component';
import {APP_RESOLVER_PROVIDERS} from './app.resolver';
import {AppState, InternalStateType} from './app.service';
import {HeaderComponent} from './header/header.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from "./footer/footer.component";

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
	...APP_RESOLVER_PROVIDERS,
	AppState
];

type StoreType = {
	state: InternalStateType,
	restoreInputValues: () => void,
	disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		HeaderComponent,
		AboutComponent,
		ContactComponent,
		FooterComponent
	],
	/**
	 * Import Angular's modules.
	 */
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(firebase.config),
		AngularFireDatabaseModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(ROUTES),
		MainModule
	],
	/**
	 * Expose our Services and Providers into Angular's dependency injection.
	 */
	providers: [
		ENV_PROVIDERS,
		APP_PROVIDERS
	]
})
export class AppModule {

	constructor(public appRef: ApplicationRef,
	            public appState: AppState) {
	}

	public hmrOnInit(store: StoreType) {
		if (!store || !store.state) {
			return;
		}
		console.log('HMR store', JSON.stringify(store, null, 2));
		/**
		 * Set state
		 */
		this.appState._state = store.state;
		/**
		 * Set input values
		 */
		if ('restoreInputValues' in store) {
			let restoreInputValues = store.restoreInputValues;
			setTimeout(restoreInputValues);
		}

		this.appRef.tick();
		delete store.state;
		delete store.restoreInputValues;
	}

	public hmrOnDestroy(store: StoreType) {
		const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
		/**
		 * Save state
		 */
		const state = this.appState._state;
		store.state = state;
		/**
		 * Recreate root elements
		 */
		store.disposeOldHosts = createNewHosts(cmpLocation);
		/**
		 * Save input values
		 */
		store.restoreInputValues = createInputTransfer();
		/**
		 * Remove styles
		 */
		removeNgStyles();
	}

	public hmrAfterDestroy(store: StoreType) {
		/**
		 * Display new elements
		 */
		store.disposeOldHosts();
		delete store.disposeOldHosts;
	}

}
