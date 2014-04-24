Ext.define('Xpoit.view.Student', {
	extend: 'Ext.Panel',
	xtype: 'studentPanel',

	config: {
		title: 'Details',
		styleHtmlContent: true,
		scrollable: 'vertical',
		tpl: [
			'{fname} {lname} {email} {course}'
		]
	}

});