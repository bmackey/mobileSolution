Ext.define('Xpoit.store.Projects', {
	extend: 'Ext.data.Store',

	config: {
		model: 'Xpoit.model.Project',
		grouper: function(record) {
			return record.get('title')[0];
		},
	}
});