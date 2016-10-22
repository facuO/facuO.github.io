(function(){
	'use strict';
	angular.module('app.portfolio').controller('indexController',indexController);
	function indexController(){
		var self = this;

		self.demo = {
			isOpen: true,
      count: 0,
      selectedDirection: 'left'
		}
	}
})();