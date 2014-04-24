Ext.define('Xpoit.store.Students', {
	extend: 'Ext.data.Store',

	config: {
		model: 'Xpoit.model.Student',
		grouper: function(record) {
			return record.get('lname')[0];
		},
	}
});