Ext.define('Xpoit.controller.StudentList', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			StudentListPanel: '#studentList'

		},
		control: {
			StudentListPanel: {
				initialize: 'onInit'
			}
		}
	},

	onInit: function() {
		console.log("reached the stdentlist controller");
		// var retrievedObject = localStorage.getItem('testObject');

		// console.log('retrievedObject: ', JSON.parse(retrievedObject));
	}
});