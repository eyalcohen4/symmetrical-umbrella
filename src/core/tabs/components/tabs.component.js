import template from './tabs.component.html';

export default {
	template,
	bindings: {
		items: '<'
	},
	bindToController: true,
	controllerAs: 'vm',
}