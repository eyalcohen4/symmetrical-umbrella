import template from './header.component.html';

class HeaderComponent {
	constructor(userService) {
		this.user = userService.user;
		this.profileImage = '/public/dagan.png'
		
		if (this.user) {
			this.profileImage = this.user.image;
		}
	}
}
export default {
	template,
	controller: HeaderComponent,
	bindToController: true,
	controllerAs: 'vm'
}