import angualr from 'angular';

import trustURL from './trsutUrl.filter';

const app = angular.module('filters', []);

app.filter('trustURL', trustURL);

export default app.name;