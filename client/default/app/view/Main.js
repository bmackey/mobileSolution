Ext.define('Xpoit.view.Main', {
    extend: 'Ext.navigation.View',
    xytpe: 'mainPanel',
    id: 'mainPanel',
    requires: [
        'Xpoit.view.Student',
        'Xpoit.view.StudentList'
    ],
    config: {
        items: [{
            xtype: 'studentListPanel'
        }]
    }
});