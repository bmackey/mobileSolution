Ext.define('Xpoit.view.Main', {
	extend: 'Ext.TabPanel',
	xtype: 'main',
	requires : [
		'Xpoit.view.Viewport',
		'Ext.form.Panel'
	],

config: {
		tabBarPosition : 'bottom',
		items : [{
			title : 'Home',
			iconCls : 'home',
			xtype : 'formpanel',
			html : ['This is a very simple example of Facebook style slide navigation. ',
			'The component is mostly developed with CSS3 animations and a small bit of javascript code. ',
			'Use it freely in your Sencha Touch application'].join(''),
			styleHtmlContent : true,
			items : [{
				xtype : 'titlebar',
				title : 'Sider',
				docked : 'top',
				items :[{
					align : 'left',
					name : 'nav_btn',
					iconCls : 'list',
					ui : 'plain'
				}]
			}]
		}]
	}
});
