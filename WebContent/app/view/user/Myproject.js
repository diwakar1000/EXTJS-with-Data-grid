Ext.define('AM.view.user.Myproject', {
	extend : 'Ext.window.Window',
	alias : 'widget.myproject',
	title : '',
	store : [],
	applyTo: 'southside',
	layout : 'form',
	border : false,
	padding: "0 0 0 0",
	width : '85%',
	height : '80%',
	autoScroll : true,
	autoSize : true,
	autoShow : true,
	items : [{
		xtype : 'panel',
		title : 'Search',
		border : false,
		width : '100%',
		//height : '10%',
		collapsible : true,
		//collapsed: true,
		items : [{
			xtype : 'panel',
			layout : 'hbox',
			border : false,
			title : 'Search Parameters',
			items : [{
				xtype : 'panel',
				padding: "50 0 0 100",
				layout : 'vbox',
				width: '50%',
				border : false,
				items : [{

					xtype : 'textfield',
					fieldLabel : 'Project ID',
					name : 'projectid'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Project Code',
					name : 'projectcode'
				}, {
					xtype : 'combo',
					fieldLabel : 'Completed Status',
					name : 'completedstatus'
				}, {
					xtype : 'button',
					text : 'Show',
					scale : 'medium',
					action : 'show'
				}]
			},{
				xtype: 'panel',
				border: false,
				padding:"50 0 0 100",
				width:'50%',
				items:[{
					xtype: 'combo',
					fieldLabel: 'Client Name',
					name:'clientname'
				},{
					xtype: 'combo',
					fieldLabel: 'Project Status',
					name: 'projectstatus'
				}]
			}]
		}]

	}, {

		border : false,
		xtype : 'projectlist',
		layout : 'auto',
		autoScroll : true,
		//height : "50%",
		padding : "10 0 0 10",
		width : "85%"
	}]

});
