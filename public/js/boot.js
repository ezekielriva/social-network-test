require.config({
	paths: {
		jquery: '/js/libs/jquery',
		underscore: '/js/libs/underscore',
		backbone: '/js/libs/backbone',
		text: '/js/libs/text',
		templates: '../templates'
	},

	shim: {
		'backbone': ['underscore', 'jquery'],
		'SocialNet': ['backbone']
	}
});

require(['SocialNet'],function(SocialNet) {
	SocialNet.initialize();
});