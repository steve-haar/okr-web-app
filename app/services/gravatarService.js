(function() {
	'use strict';

	angular
		.module('app')
		.factory('gravatarService', [gravatarService]);

	function gravatarService() {
		var baseUrl = 'https://www.gravatar.com/avatar/';

		return {
      get: get
		};

		function get(emailAddress) {
			return baseUrl + calcMD5(emailAddress); // + md5(emailAddress);
		}
  }
}());
