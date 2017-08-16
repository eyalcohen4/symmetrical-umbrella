import angular from 'angular';
import template from './profile-settings.component.html';

class ProfileSettingsComponent {
	constructor(apiService, userService) {
		this.api = apiService;
		this.profileImage = 'public/dagan.png';
		this.error = '';
		this.user = userService.user;
		console.log(this.user);
		this.form = {
			firstName: '',
			lastName: '',
			password: '',
			newPassword: '',
			image: '',
			tel: '',
		}
	}

	saveImage() {
		const image = document.querySelector('input#profile-settings-upload[type=file]');
		const reader = new FileReader();

		reader.onload = (e) => {
			this.form.image = e.target.result;
		}

		if (image.files[0]) { 
			reader.readAsDataURL(image.files[0]);
		}
	}

	submit() {
		this.saveImage();

		if (!this.form.firstName || !this.form.lastName) {
			this.error = 'אנא הכנס שם פרטי ושם משפחה';
		} else {
			this.error = '';
		}

		if (this.form.newPassword.length) {
			this.form.password = this.form.newPassword;
		}

		this.api.saveUser(this.form);
	}
}
export default {
	template,
	controller: ProfileSettingsComponent,
	bindToController: true,
	controllerAs: 'vm',
}