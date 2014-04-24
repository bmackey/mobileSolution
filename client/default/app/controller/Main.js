Ext.define('Xpoit.controller.Main', {
	extend: 'Ext.app.Controller',

	config: {

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
					desc: item.description,
					disciplines: item.disciplines
				});

				console.log(records[i]);
				localStorage.setItem('records', records);
			}
		}, function(msg, err) {
			console.log('Could not get stuff', msg);
		})

	}


});