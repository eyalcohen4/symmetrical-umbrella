export default {
	url: '/',
	template: '<app class="app"></app>',
	resolve: {
		user: function resolve(userService) { return userService.setUser(); }
	}
}