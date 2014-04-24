/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/
Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false
});

Ext.application({
    name: 'Xpoit',

    requires: [
        'Ext.MessageBox'
    ],

    controllers: [
        'Main',
        'StudentList',
        'Search'
    ],

    models: [
        'RecordModel'
    ],

    views: [
        'Home',
        'Info',
        'Maps',
        'Project',
        'Search',
        'Student',
        'Visit',
        'StudentList',
        'Main',

    ],

    stores: [
        'RecordStore'
    ],

    // Give the Ext.Viewport global instance a custom layout and animation
    viewport: {
        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                duration: 300
            }
        }
    },

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Xpoit.view.Home'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }


});