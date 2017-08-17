import angular from 'angular';

class UserService {
	constructor(apiService) {
		this.user = null;
		this.api  = apiService;
	}

	setUser() {
		return this.api.getUser().then(response => {
			if (response.status === 200) {
				this.user = response.data;
			}

			return this.user;
		});
	}
}

export default UserService;