import angular from 'angular';

class Api {
	constructor($http) {
		this.base_url = 'http://localhost:3000';
		this.http = $http;
	}

	sendRequest(method, url, data, headers) {
		return this.http({
			method,
			url: `${this.base_url}/${url}`,
			data,
			headers,
		}).then((response) => response, error => error);
	}

	getUser(user) {
		return this.sendRequest('GET', 'getUser');
	}

	saveUser(user) {
		const payload = new FormData();

		payload.append('image', user.image);
		payload.append('firstName', user.firstName);
		payload.append('lastName', user.lastName);
		payload.append('password', user.password);
		payload.append('tel', user.tel);

		return this.sendRequest('POST', 'saveUser', payload, { 'Content-Type': undefined });
	}
}


const app = angular.module('api', []);

app.service('apiService', Api);

export default app.name;