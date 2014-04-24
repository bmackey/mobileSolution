Ext.define('Xpoit.model.Student', {
	extend: 'Ext.data.Model',

	config: {
		fields: [{
			name: 'fname',
			type: 'string'
		}, {
			name: 'lname',
			type: 'string'
		}, {
			name: 'course',
			type: 'string'
		}, {
			name: 'email',
			type: 'string'
		}]
	}
})