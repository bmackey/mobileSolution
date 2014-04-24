Ext.define('Xpoit.view.Project', {
	extend: 'Ext.Panel',
	xtype: 'projectPanel',

	config: {
		styleHtmlContent: true,
		scrollable: 'vertical',
		title: 'Project Profile',
		tpl: [
			'Project No: {project} <br />Project Title: {title} <br />Commercial Title: {commercial} <br />Project Description: {desc} <br />Disciplines Used: {disciplines}'
		]
	}

});