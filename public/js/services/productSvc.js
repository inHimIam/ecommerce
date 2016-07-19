angular.module('ecommerceApp')
	.service('productSvc', function($http) {

		this.getProduct = function(id) {
			return $http.get('http://localhost:3000/api/products/' + id).then(function(result) {
				return result.data;
			})
		};

	});