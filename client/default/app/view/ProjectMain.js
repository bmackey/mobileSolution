Ext.define('Xpoit.view.ProjectMain', {
    extend: 'Ext.navigation.View',
    xytpe: 'projectMainPanel',
    id: 'projectMainPanel',
    requires: [
        'Xpoit.view.Project',
        'Xpoit.view.ProjectList'
    ],
    config: {
        items: [{
            xtype: 'projectListPanel'
        }]
    }
});