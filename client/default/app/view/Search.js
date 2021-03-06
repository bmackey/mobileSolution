Ext.define('Xpoit.view.Search', {
    extend: 'Ext.Container',
    requires: ['Ext.data.Store'],
    config: {
        layout: 'vbox',
        id: 'searchPanel',
        iconCls: 'search',
        style: 'background-color:#6d6e71;',
        items: [{
                xtype: 'toolbar',
                docked: 'top',
                align: 'center',
                pack: 'center',
                style: 'text-align:center',
                title: 'Search',
                layout: {
                    type: 'hbox',

                },
                items: [{
                    cls: 'backBtn',
                    html: '<img src="resources/images/back.png"/>',
                    hidden: Xpoit.hideBack || false,

                    element: 'element',
                    handler: function() {
                        // Ext.getCmp('searchPanel').destroy();
                        Ext.Viewport.setActiveItem(Ext.create('Xpoit.view.Home'));
                    }
                }, {
                    xtype: 'spacer'
                }, {
                    html: '<img class="headerLogo" src="resources/images/homeLogo.png"/>'
                }, ]
            }, {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                },
                items: [{
                    floating: true,
                    html: 'Search Stuffs Goes Here'
                }, ]

            }, {
                xtype: 'toolbar',
                docked: 'bottom',
                cls: 'btm-nav',
                id: 'btm-nav',
                pack: 'center',
                layout: {
                    type: 'vbox'
                },
                items: [{
                    xtype: 'button',
                    align: 'center',
                    html: '<img class="circle" src="resources/images/circle.png" />',
                    style: 'width:250px; margin-top: -32px;',


                    // SLIDE MENU BUTTON

                    handler: function() {
                        // Show or hide sliding menu:
                        var settingsPanel = Ext.getCmp('sliding_menu');
                        var bottomPanel = Ext.getCmp('btm-nav');

                        if (settingsPanel.isHidden()) {
                            settingsPanel.show({
                                type: 'slideIn',
                                direction: 'up',
                                duration: 2000
                            });
                            setTimeout(function() {
                                bottomPanel.hide()
                            }, 300);
                        } else {
                            settingsPanel.hide({
                                type: 'slideOut',
                                direction: 'down',
                                duration: 2000
                            });
                            setTimeout(function() {
                                bottomPanel.show()
                            }, 1650);

                        }
                    }
                }],
            }, {
                xtype: 'container',
                id: 'sliding_menu',
                cls: 'sliding_menu',
                flex: 3,
                layout: 'fit',
                items: [{
                    xtype: 'toolbar',
                    docked: 'top',
                    cls: 'btm-nav',
                    pack: 'center',
                    layout: {
                        type: 'vbox'
                    },
                    items: [{
                        xtype: 'button',
                        align: 'center',
                        html: '<img class="circle" src="resources/images/circle.png" />',
                        style: 'width:250px; margin-top: -32px;',
                        // SLIDE MENU BUTTON

                        handler: function() {
                            // Show or hide sliding menu:
                            var settingsPanel = Ext.getCmp('sliding_menu');
                            var bottomPanel = Ext.getCmp('btm-nav');

                            if (settingsPanel.isHidden()) {
                                settingsPanel.show({
                                    type: 'slideIn',
                                    direction: 'up',
                                    duration: 2000
                                });
                                setTimeout(function() {
                                    bottomPanel.hide()
                                }, 1000);
                            } else {
                                settingsPanel.hide({
                                    type: 'slideOut',
                                    direction: 'down',
                                    duration: 2000
                                });
                                setTimeout(function() {
                                    bottomPanel.show()
                                }, 1570);

                            }
                        }
                    }]
                }, {
                    xtype: 'list',
                    id: 'slideUpMenu',
                    itemTpl: '<img src="{imgURL}" class="slideIcon" width="20" height="20">{category_name}',
                    style: 'background-color:#599195;',
                    cls: 'myList',
                    data: [{
                        imgURL: 'resources/images/icons/search.png',
                        category_name: 'Search',

                    }, {
                        imgURL: 'resources/images/icons/student.png',
                        category_name: 'Student List'
                    }, {
                        imgURL: 'resources/images/icons/project.png',
                        category_name: 'Project List'
                    }, {
                        imgURL: 'resources/images/icons/map.png',
                        category_name: 'Location Maps',
                        page: 'Maps'
                    }, {
                        imgURL: 'resources/images/icons/visit.png',
                        category_name: 'VisitIt'
                    }, {
                        imgURL: 'resources/images/icons/note.png',
                        category_name: 'NoteIt Microblog'
                    }, {
                        imgURL: 'resources/images/icons/info.png',
                        category_name: 'Information'
                    }, ]
                }],
                hidden: true
            },

        ]
    }
});