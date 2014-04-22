Ext.define('Xpoit.model.Contact', {
	extend: 'Ext.data.Model',
	id: 'Contact',
	config:	{
		idProperty: 'studentList',
		fields: [
			{
				name: 'string', 
				type: 'string'
			}
		],
	}
});