Ext.define('Xpoit.view.Home', {
    requires: [
        'Ext.Img',
        'Ext.layout.HBox',
    ],
    extend: 'Ext.Panel',
    xtype: 'home',
    style: 'background-color:#6d6e71;',

    config: {
        scrollable: false,
        cls: 'home',

        layout: {
            type: 'vbox'
        },

        items: [{
                xtype: 'panel',
                height: 130,
                style: 'background-color:#FFF; -webkit-box-shadow: rgba(0,0,0,0.4) 2px 4px 1px 2px; overflow: visible; text-align: center',
                html: '<img class="homeLogo" src="resources/images/homeLogo.png" /><br/>'
            },

            {
                xtype: 'image',
                height: 10,
                style: 'text-align:center',
                html: '<img class="triangle" src="resources/images/triangle.png" />'
            },

            {
                xtype: 'panel',
                height: 60,
            },

            //search
            new Ext.Panel({
                height: 45,

                layout: {
                    type: 'hbox',
                    pack: 'center',
                },

                items: [{
                        flex: 1,
                    }, {
                        flex: 1.5,
                        html: '<img class="icons" src="resources/images/icons/search.png" />'
                    }, {
                        id: 'searchBtn',
                        cls: 'homeIcons',
                        height: 10,
                        width: 200,
                        html: 'Search<br /><hr />',

                        listeners: {
                            element: 'element',
                            tap: function() {
                                Ext.Viewport.setActiveItem(Ext.create('Xpoit.view.Search'));
                            }
                        }
                    }, {
                        flex: 1
                    }

                ]
            }),

            // Student Link
            new Ext.Panel({
                height: 45,

                layout: {
                    type: 'hbox',
                    pack: 'center',
                },
                items: [{
                        flex: 1,
                    }, {
                        flex: 1.5,
                        html: '<img class="icons" src="resources/images/icons/student.png" />'
                    }, {
                        id: 'studentBtn',
                        cls: 'homeIcons',
                        height: 10,
                        width: 200,
                        html: '<a>Student List</a><br /><hr />',

                        listeners: {
                            element: 'element',
                            tap: function() {
                                Ext.Viewport.setActiveItem(Ext.create('Xpoit.view.Student'));
                            }
                        }
                    }, {
                        flex: 1
                    }

                ]
            }),
            //Project Link
            new Ext.Panel({
                height: 45,

                layout: {
                    type: 'hbox',
                    pack: 'center',
                },
                items: [{
                    flex: 1,
                }, {
                    flex: 1.5,
                    html: '<img class="icons" src="resources/images/icons/project.png" />'
                }, {
                    id: 'projectBtn',
                    cls: 'homeIcons',
                    height: 10,
                    width: 200,
                    html: '<a>Project List</a><br /><hr />',

                    listeners: {
                        element: 'element',
                        tap: function() {
                            Ext.Viewport.setActiveItem(Ext.create('Xpoit.view.Project'));
                        }
                    }
                }, {
                    flex: 1
                }]
            }),

            //Maps Link
            new Ext.Panel({
                height: 45,

                layout: {
                    type: 'hbox',
                    pack: 'center',
                },
                items: [{
                    flex: 1,
                }, {
                    flex: 1.5,
                    html: '<img class="icons" src="resources/images/icons/map.png" />'
                }, {
                    id: 'mapBtn',
                    cls: 'homeIcons',
                    height: 10,
                    width: 200,
                    html: '<a>Location Maps</a><br /><hr />',

                    listeners: {
                        element: 'element',
                        tap: function() {
                            Ext.Viewport.setActiveItem(Ext.create('Xpoit.view.Maps'));
                        }
                    }
                }, {
                    flex: 1
                }]
            }),

            //Visit It Link
            new Ext.Panel({
                height: 45,

                layout: {
                    type: 'hbox',
                    pack: 'center',
                },
                items: [{
                    flex: 1,
                }, {
                    flex: 1.5,
                    html: '<img class="icons" src="resources/images/icons/visit.png" />'
                }, {
                    id: 'visitBtn',
                    cls: 'homeIcons',
                    height: 10,
                    width: 200,
                    html: '<a>VisitIt!</a><br /><hr />',

                    listeners: {
                        element: 'element',
                        tap: function() {
                            Ext.Viewport.setActiveItem(Ext.create('Xpoit.view.Visit'));
                        }
                    }
                }, {
                    flex: 1
                }]
            }),


            //NoteIt Link
            new Ext.Panel({
                height: 45,

                layout: {
                    type: 'hbox',
                    pack: 'center',
                },
                items: [{
                    flex: 1,
                }, {
                    flex: 1.5,
                    html: '<img class="icons" src="resources/images/icons/note.png" />'
                }, {
                    id: 'noteBtn',
                    cls: 'homeIcons',
                    height: 10,
                    width: 200,
                    html: '<a>NoteIt! Microblog</a><br /><hr />',

                    listeners: {
                        element: 'element',
                        tap: function() {

                            Ext.Msg.confirm("External Url", "Are you sure you want to leave the app?", function(btn) {
                                if (btn == 'yes') {
                                    window.open('https://pure-badlands-7549.herokuapp.com/home'); // which page wants to redirect
                                }
                            });
                        }
                    }
                }, {
                    flex: 1
                }]
            }),


            //Info Link
            new Ext.Panel({
                height: 45,

                layout: {
                    type: 'hbox',
                    pack: 'center',
                },
                items: [{
                    flex: 1,
                }, {
                    flex: 1.5,
                    html: '<img class="icons" src="resources/images/icons/info.png" />'
                }, {
                    id: 'infoBtn',
                    cls: 'homeIcons',
                    height: 10,
                    width: 200,
                    html: '<a>Information</a>',

                    listeners: {
                        element: 'element',
                        tap: function() {
                            Ext.Viewport.setActiveItem(Ext.create('Xpoit.view.Info'));
                        }
                    }
                }, {
                    flex: 1
                }]
            }),

        ]
    }
});