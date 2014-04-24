Ext.define('Xpoit.controller.Search', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			search: '#searchPanel'
		},
		control: {
			search: {
				initialize: 'onInit'
			}
		}
	},

	onInit: function() {
		console.log('I have reached the search Controller');
	}
});