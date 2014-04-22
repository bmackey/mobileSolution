Ext.define('Xpoit.controller.Menu', {
    extend: 'Ext.app.Controller',
    config: {

        refs: {
            slideUpMenu: '#slideUpMenu',
        },


        control : {
            slideUpMenu : {
                tap : "menuItem",
            }
        }

    },

    launch: function() {
        // When our controller is launched, create an instance of our User view and add it to the viewport
        // which has a card layout
        Ext.Viewport.add(Ext.create('Xpoit.view.Search'));
        Ext.Viewport.add(Ext.create('Xpoit.view.Student'));
    },

    menuItem:function(){
        console.log("tapped");
    },

}); 