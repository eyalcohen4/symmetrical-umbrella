import angular from 'angular';
import template from './input-file.directive.html';

function InputFileDirective() {
	return {
		require: 'ngModel',
		restrict: 'E',
		template: template,
		scope: {
			text: '@',
			id: '@',
			accept: '@',
		},
		link: function link(scope, element, attrs, ngModel) {
			const button = element.find('button');
			const input  = element.find('input');

			input.bind('change', (event) => {
				scope.$evalAsync(() => {
					const reader = new FileReader();
					
					reader.onload = (e) => {
						scope.$evalAsync(() => {
							ngModel.$setViewValue(e.target.result);
						});
					};
					reader.readAsDataURL(event.target.files[0]);
				});
			});

			button.on('click', (e) => {
				input[0].click();
			});
		},
	}
}

export default InputFileDirective;