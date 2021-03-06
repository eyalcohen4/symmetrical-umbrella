import angular from 'angular';

import appHeader from './components/header/header.component';
import appFooter from './components/footer/footer.component';
import appComponent from './components/app/app.component';

import rootState from './pages/root.state';

const app = angular.module('app.layout', []);

app.component('appHeader', appHeader);
app.component('appFooter', appFooter);
app.component('app', appComponent);

app.config(($stateProvider) => {
	$stateProvider.state('root', rootState);
});

export default app.name;
