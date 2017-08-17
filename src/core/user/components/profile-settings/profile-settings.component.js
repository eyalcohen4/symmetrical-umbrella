import angular from 'angular';
import template from './profile-settings.component.html';

class ProfileSettingsComponent {
	constructor(apiService, userService) {
		this.api   = apiService;
		this.error = '';
		this.user  = userService.user;

		this.profileImage = 'public/dagan.png';
		
		if (this.user) {
			this.profileImage = this.user.image;
		}

		this.form = {
			firstName: this.user && this.user.firstName || '',
			lastName: this.user && this.user.lastName || '',
			password: this.user && this.user.password || '',
			image: this.user && this.user.image || '',
			tel: this.user && this.user.tel || '',
			newPassword: '',
		}
	}

	saveImage() {
		const image = document.querySelector('input#profile-settings-upload[type=file]');
		const reader = new FileReader();

		reader.onload = (e) => {
			this.profileImage = e.target.result;
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

		if (!this.error) { 
			this.api.saveUser(this.form, this.profileImage).then(() => window.location.reload());
		}
	}
}

export default {
	template,
	controller: ProfileSettingsComponent,
	bindToController: true,
	controllerAs: 'vm',
}