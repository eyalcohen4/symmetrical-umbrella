import angular from 'angular';

class UserService {
	constructor(apiService) {
		this.user = null;
		this.api  = apiService;
	}

	setUser() {
		this.api.getUser().then(user => { 
			this.user = user;
		});
	}
}

export default UserService;