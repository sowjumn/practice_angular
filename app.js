(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.product = gem;
	});

	var gem = {
		name: 'Blue Sapphire',
		price: 123.00,
		description: 'Best things every come in small pieces'
	}
})();

