Ext.define('Xpoit.controller.Main', {
	extend: 'Ext.app.Controller',

	config: {
		ref: {
			main: 'mainPanel',
			project: 'projectPanel',
			studentPanel: 'studentPanel'
		},
		control: {
			'#studentList': {
				disclose: 'showProfile'
			},
			'#projectList': {
				disclose: 'showProject'
			},
		},
	},

	showProfile: function(list, record) {
		console.log('tapped expand student info');
		// Ext.getCmp('studentPanel').show();
		Ext.ComponentManager.get('mainPanel').push({
			xtype: 'studentPanel',
			data: record.data
		});
	},
	showProject: function(list, record) {
		console.log('tapped expand project');
		Ext.ComponentManager.get('projectMainPanel').push({
			xtype: 'projectPanel',
			data: record.data
		});
	},
	init: function() {

		$fh.act({
			"act": "findAll"
		}, function(res) {
			console.log('Getting stuff!', res);
			var records = [];
			for (var i = 0; i < res.length; i++) {
				var item = res[i];
				records.push({
					project: item.project,
					fname: item.fname,
					lname: item.lname,
					email: item.email,
					course: item.course,
					title: item.title,
					commercial: item.commercial,
					desc: item.desc,
					disciplines: item.disciplines
				});

				console.log(records[i]);


				var studentStore = Ext.getStore('Students');
				studentStore.add(records[i]);

				var projectStore = Ext.getStore('Projects');
				projectStore.add(records[i]);

			}
		}, function(msg, err) {
			console.log('Could not get stuff', msg);
		})
	}
});