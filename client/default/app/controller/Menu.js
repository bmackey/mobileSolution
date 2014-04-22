Ext.define('Xpoit.controller.Menu', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            slideUpMenu: '#slideUpMenu',
        },

        control: {
            Search: {
                itemtap: "searchPage"
            },
            StudentList: {
                itemtap: "studentListPage"
            },
            Project: {
                tap: "projectPage"
            },
            Maps: {
                tap: "mapsPage"
            },
            Visit: {
                tap: "visitPage"
            },
            Blog: {
                tap: "blogPage"
            },
            Info: {
                tap: "infoPage"
            },
        },
    },

    searchPage: function() {
        Ext.Viewport.setActiveItem(Ext.create('Xpoit.view.Search'));
    }

});