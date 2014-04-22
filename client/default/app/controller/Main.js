Ext.define('Xpoit.controller.Main', {
	extend: 'Ext.app.Controller',

	config: {

	},

	init: function() {
		$fh.act({
			"act": "findAll"
		}, function(res) {
			console.log('Getting stuff!', res);
		}, function(msg, err) {
			console.log('Could not get stuff', msg);
		})
	}
});