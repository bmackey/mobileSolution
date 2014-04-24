Ext.define('Xpoit.model.Project', {
	extend: 'Ext.data.Model',

	config: {
		fields: [{
			name: 'project',
			type: 'string'
		}, {
			name: 'title',
			type: 'string'
		}, {
			name: 'commercial',
			type: 'string'
		}]
	}
})