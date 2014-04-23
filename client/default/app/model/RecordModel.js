Ext.define('Xpoit.model.RecordModel', {
	extend: 'Ext.data.Model',
	id: 'RecordModel',
	config: {
		idProperty: 'recordId',
		fields: [{
				name: 'project',
				type: 'number'
			}, {
				name: 'title',
				type: 'string'
			}, {
				name: 'commercial',
				type: 'string'
			}, {
				name: 'description',
				type: 'string'
			}, {
				name: 'disciplines',
				type: 'string'
			}, {
				name: 'course',
				type: 'string'
			}, {
				name: 'fname',
				type: 'string'
			}, {
				name: 'lname',
				type: 'string'
			}, {
				name: 'email',
				type: 'string'
			},
			// {
			// 	name: 'roomNo',
			// 	type: 'number'
			// }, {
			// 	name: 'loc',
			// 	type: 'string'
			// }
		]
	}
})