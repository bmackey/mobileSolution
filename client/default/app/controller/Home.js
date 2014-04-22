Ext.define('Xpoit.controller.Home', {
    extend: 'Ext.app.Controller',

    config: {

        refs : {
            searchBtn: '#searchBtn',
        },

        control: {
            'searchBtn': {
                // On the tap event, call onNewTap
                tap: 'searchView'
            },
            'studentBtn': {
                // On the tap event, call onNewTap
                tap: 'studentView'
            }
        },
    },

    launch: function() {
        // When our controller is launched, create an instance of our User view and add it to the viewport
        // which has a card layout
        Ext.Viewport.add(Ext.create('Xpoit.view.Search'));
        Ext.Viewport.add(Ext.create('Xpoit.view.Student'));
    },

    searchView: function() {
        // When the user taps on the button, create a new reference of our New view, and set it as the active
        // item of Ext.Viewport
       Ext.Viewport.setActiveItem({xtype:'search'});
       console.log(Ext.Viewport.getActiveItem().xtype);

    },

    studentView: function() {
        // When the user taps on the button, create a new reference of our New view, and set it as the active
        // item of Ext.Viewport
        Ext.Viewport.setActiveItem(Ext.create('Xpoit.view.Student'));
    }
});