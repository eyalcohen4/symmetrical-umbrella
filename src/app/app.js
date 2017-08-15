import angular from 'angular';

import layoutModule from '../common/layout';

import '@uirouter/angularjs';

const app = angular.module('myplay', [ 
	'ui.router',
	layoutModule, 
]);

app.config(($locationProvider) => {
	$locationProvider.html5Mode({ enabled: true });
});
export default app;