import '@uirouter/angularjs';

import angular from 'angular';

import api from '../common/api/api.service';

import filters from '../common/filters';
import layout from '../common/layout';
import forms from '../common/forms';

import profileImage from '../core/profile-image';
import tabs from '../core/tabs';
import user from '../core/user';

import '../styles/main.scss';

const app = angular.module('myplay', [ 
	'ui.router',
	api,
	filters,
	forms,
	profileImage,
	tabs,
	layout, 
	user,
]);

app.config(($locationProvider) => {
	$locationProvider.html5Mode({ enabled: true });
});

export default app;