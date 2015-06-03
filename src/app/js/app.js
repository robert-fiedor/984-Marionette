'use strict';

var App = Backbone.Marionette.Application.extend({
	setRootLayout: function () {
		this.root = new Ted.Layout.Root();
	}
});

window.Ted = new App();

Ted.on('before:start', function () {
	Ted.setRootLayout();
});
