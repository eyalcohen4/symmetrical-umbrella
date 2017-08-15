import template from './footer.component.html';

function FooterComponent() {
	this.items = [
		{
			text: 'משחקים',
			image: 'public/games-icon.svg',
		},
		{
			text: 'ניהול קבוצה',
			image: 'public/manage_team.svg',
		},
		{
			text: 'הפעל מצלמות',
			image: 'public/camera.svg',
		},
		{
			text: 'אפשרויות LIVE',
			image: 'public/live.svg',
		},
	]
}
export default {
	template,
	controller: FooterComponent,
	bindToController: true,
	controllerAs: 'vm',
}