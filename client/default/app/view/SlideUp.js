Ext.define('Xpoit.view.SlideUp', {
    requires:[
        'Ext.Img',
        'Ext.layout.HBox',
    ],
    extend: 'Ext.Panel',
    xtype:  'slideUp',
    // height: '65%',
    // style:  'background-color:#599195;',

    config: {
        scrollable:false,
        cls:    'home',

        layout: {
            type:   'vbox'
        },

        items: [ 
        {
            xtype: 'spacer',
            height: 200,
        },
        {
            xtype: 'panel',
            height:10,
            style: 'text-align:center',
            html: '<a><img class="circle" src="resources/images/circle.png" /></a>',

            listeners: {
                render: function(c){
                    c.getEl().on('click', function(){
                      app.views.viewport.setActiveItem(app.views.information, {type: 'slide', direction: 'down'});
                    }, c);
                }
              }
        },

        new Ext.Panel(
        {
            height: 45,

            layout: {
              type: 'card',
              pack: 'center',  
            },
           
            items: [
                {
                    flex: 1,    
                },
                {
                    flex: 1.5,
                    html:'<img class="icons" src="resources/images/icons/search.png" />'
                },
                {
                    id: 'searchB',
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
                },
                {
                    flex:1
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
            items: [
                {
                    flex: 1,    
                },
                {
                    flex: 1.5,
                    html:'<img class="icons" src="resources/images/icons/student.png" />'
                },
                {
                    id: 'studentB',
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
                },
                {
                    flex:1
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
            items: [
                {
                    flex: 1,    
                },
                {
                    flex: 1.5,
                    html:'<img class="icons" src="resources/images/icons/project.png" />'
                },
                {
                    id: 'projectB',
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
                },
                {
                    flex: 1
                }
            ]
        }),

        //Maps Link
        new Ext.Panel({
            height: 45,

            layout: {
              type: 'hbox',
              pack: 'center',  
            },
            items: [
                {
                    flex: 1,    
                },
                {
                    flex: 1.5,
                    html:'<img class="icons" src="resources/images/icons/map.png" />'
                },
                {
                    id: 'mapB',
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
                },
                {
                    flex: 1
                }
            ]
        }),

        //Visit It Link
        new Ext.Panel({
            height: 45,

            layout: {
              type: 'hbox',
              pack: 'center',  
            },
            items: [
                {
                    flex: 1,    
                },
                {
                    flex: 1.5,
                    html:'<img class="icons" src="resources/images/icons/visit.png" />'
                },
                {
                    id: 'visitB',
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
                },
                {
                    flex: 1
                }
            ]
        }),


        //NoteIt Link
        new Ext.Panel({
            height: 45,

            layout: {
              type: 'hbox',
              pack: 'center',  
            },
            items: [
                {
                    flex: 1,    
                },
                {
                    flex: 1.5,
                    html:'<img class="icons" src="resources/images/icons/note.png" />'
                },
                {
                    id: 'noteB',
                    cls: 'homeIcons',
                    height: 10,
                    width: 200,
                    html: '<a>NoteIt! Microblog</a><br /><hr />',

                    llisteners: {
                        element: 'element',
                        tap: function() {
                        Ext.Viewport.setActiveItem(Ext.create('Xpoit.view.Note'));
                        }
                    }
                },
                {
                    flex: 1
                }
            ]
        }),


        //Info Link
        new Ext.Panel({
            height: 45,

            layout: {
              type: 'hbox',
              pack: 'center',  
            },
            items: [
                {
                    flex: 1,    
                },
                {
                    flex: 1.5,
                    html:'<img class="icons" src="resources/images/icons/info.png" />'
                },
                {
                    id: 'infoB',
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
                },
                {
                    flex: 1
                }
            ]
        }),

        ]
    }
});
