Ext.define('Xpoit.view.FB_Slide_Menu_Container', {
    extend: 'Ext.Container',
    requires: [ 'Ext.data.Store' ],
    alias: 'widget.fb_slide_menu_container',
    config: {
        layout: 'vbox',
        items: [
        {
            xtype: 'navigationview',
            flex: 1,
            items: [
                {
                    xtype: 'container',
                    title: 'Search',
                    html: 'Search Function to go here @ later stage'
                } 
            ],
            navigationBar: {
                items: [
                    {
                        // SLIDE MENU BUTTON
                        iconMask: true,
                        iconCls: 'list',
                        align: 'left',
                        handler : function() {
                            // Show or hide sliding menu:
                            var settingsPanel = Ext.getCmp('sliding_menu');
                            var bottomPanel = Ext.getCmp('btm-nav');
                        
                            if (settingsPanel.isHidden()) {
                                settingsPanel.show({type:'slideIn', direction:'up', duration:2000});
                                setTimeout(function() {
                                    bottomPanel.hide()
                                }, 300);
                            } else {
                                settingsPanel.hide({type: 'slideOut', direction: 'down', duration: 2000});
                                setTimeout(function() {
                                    bottomPanel.show()
                                }, 1650);
                                
                            } 
                        }
                    }
                ]
            }
        },
        {
                xtype: 'toolbar',
                docked: 'bottom',
                cls:    'btm-nav',
                id:     'btm-nav',
                pack:   'center', zIndex: 10,
                layout: {
                    type: 'vbox'
                },
                items: [
                    {   
                        xtype: 'panel',         
                        align: 'center',
                        height: 30,
                        html: '<img class="circle" src="resources/images/circle.png" />',
                    
                        }
                    
                ],
            },
        {
            xtype: 'container',
            id: 'sliding_menu',
            cls: 'sliding_menu',
            flex: 4,
            layout: 'fit',
            items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                cls:    'btm-nav',
                pack: 'center',
                layout: {
                    type:'vbox'
                },
                items:[
                {
                    xtype: 'panel',         
                        align: 'center',
                        height: 30,
                        html: '<img class="circle" src="resources/images/circle.png" />',
                        listeners:[
                             {
                                element: 'element',
                                event: 'tap',
                                fn: function() {
                                    console.log('TAP!');
                                    Ext.Viewport.setActiveItem(Ext.create('Xpoit.view.SlideUp'));
                                }
                            }
                        ],
                }]
            },
            {
                xtype: 'list',
                itemTpl: '<img src="{imgURL}" class="slideIcon" width="20" height="20">{category_name}',
                style:'background-color:#599195;',
                cls:'myList',
                data: [
                {
                    imgURL:'resources/images/icons/search.png',
                    category_name: 'Search'
                },
                {
                    imgURL:'resources/images/icons/student.png',
                    category_name: 'Student List'
                },
                {
                    imgURL:'resources/images/icons/project.png',
                    category_name: 'Project List'
                },
                {
                    imgURL:'resources/images/icons/map.png',
                    category_name: 'Location Maps'
                },
                {
                    imgURL:'resources/images/icons/visit.png',
                    category_name: 'VisitIt'
                },
                 {
                    imgURL:'resources/images/icons/note.png',
                    category_name: 'NoteItMicroblog'
                },
                {
                    imgURL:'resources/images/icons/info.png',
                    category_name: 'Information'
                },
                ]
            }
            ],
            hidden:true
        },

        ]  
    }
});