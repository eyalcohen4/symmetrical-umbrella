import angular from 'angular';
import profileSettings from './components/profile-settings/profile-settings.component';
import userService from './services/user.service';

const app = angular.module('user', []);

app.component('profileSettings', profileSettings);
app.service('userService', userService)
export default app.name;
