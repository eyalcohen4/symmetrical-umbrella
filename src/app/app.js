import '@uirouter/angularjs';

import angular from 'angular';

import layout from '../common/layout';
import profileImage from '../core/profile-image';
import tabs from '../core/tabs';
import user from '../core/user';

import '../styles/main.scss';

const app = angular.module('myplay', [ 
	'ui.router',
	profileImage,
	tabs,
	layout, 
	user,
]);

app.config(($locationProvider) => {
	$locationProvider.html5Mode({ enabled: true });
});

export default app;