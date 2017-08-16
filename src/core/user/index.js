import angular from 'angular';
import profileSettings from './components/profile-settings/profile-settings.component';

const app = angular.module('user', []);

app.component('profileSettings', profileSettings);

export default app.name;
