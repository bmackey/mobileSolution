Ext.define('Xpoit.view.Info', {
    requires:[
       
    ],
    extend: 'Ext.Panel',
    xtype:  'info',

    config : {
		iconCls : 'info',
		style: 'background-color:#6d6e71;',
		xtype : 'panel',
		items: [
  			{
  				xtype: 'toolbar',
			    docked: 'top',
			    align: 'center',
			    pack: 'center',
			    style: 'text-align:center',
			    title : 'Information',
			    layout: {
			        type: 'hbox',
			       
			    },
			    items: [
			        {	
			        	cls: 'backBtn',
			            html: '<img src="resources/images/back.png"/>',
	          			hidden: Xpoit.hideBack || false,

	  					element: 'element',
	                    	handler: function() {
	                    	Ext.Viewport.setActiveItem(Ext.create('Xpoit.view.Home'));
	                    }
			        },
			        {
			        	xtype: 'spacer'
			        },
		  			{
		  				html: '<img class="headerLogo" src="resources/images/homeLogo.png"/>'
		  			},
  				]
  			},
  			{
  				xtype: 'toolbar',
  				docked: 'bottom',
  				cls: 	'btm-nav',
  				pack: 	'center', 
  				layout: {
  					type: 'vbox'
  				},
  				items: [
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
			        	}
  					
  				]
  			}
  			]
  		}

});