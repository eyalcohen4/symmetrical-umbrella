import angular from 'angular';

import inputText from './components/input-text.directive';
import inputFile from './components/input-file.directive';

const app = angular.module('app.forms', []);

app.directive('inputText', inputText);
app.directive('inputFile', inputFile);

export default app.name;
