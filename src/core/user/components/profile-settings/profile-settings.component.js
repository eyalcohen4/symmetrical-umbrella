import template from './profile-settings.component.html';

class ProfileSettingsComponent {
	constructor() {
		this.profileImage = 'public/dagan.png'
	}
}
export default {
	template,
	controller: ProfileSettingsComponent,
	bindToController: true,
	controllerAs: 'vm',
}