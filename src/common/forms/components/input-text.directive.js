import template from './input-text.directive.html';


function controller() {
}

function link(scope, element, attr, ngModel) {
	const input = element.find('input');

	input.on('input change', (e) => {
		ngModel.$setViewValue(event.target.value);
	});
	
	ngModel.$render = () => {
		input.val(ngModel.$viewValue);
	};
}

export default function inputTextDirective() {

	return { 
		template,
		require: '?ngModel',
		scope: {
			type: '@',
			label: '@',
			placeholder: '@'
		},
		link,
		controller,
		bindToController: true,
		controllerAs: 'vm',
	}
}
