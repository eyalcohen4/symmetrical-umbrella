import angular from 'angular';
import tabs from './components/tabs.component';

const app = angular.module('tabs', []);

app.component('tabs', tabs);

export default app.name;