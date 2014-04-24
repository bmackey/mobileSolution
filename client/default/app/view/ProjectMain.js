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
            backButton: {
                ui: 'back',
                hidden: false,
                handler: function() {
                    // Ext.getCmp('searchPanel').destroy();
                    Ext.Viewport.setActiveItem(Ext.create('Xpoit.view.Home'));
                }
            },
        }, {
            xtype: 'projectListPanel'
        }]
    }
});