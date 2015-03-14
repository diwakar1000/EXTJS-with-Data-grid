Ext.require['*'],
//Creating a new instace of the application.
Ext.application({
	requires : ['Ext.container.Viewport'],
	name : 'AM', // defining the global variable.which in turn have the logical name of the application.
	controllers : ['MyTaskController'], //loades the controllers defined at controller folder.

	appFolder : 'app', //Application Folder name.
	//launch the application as soon as it started.
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout : 'border',
			width : '100',
			height : '85%',
			autoScroll : true,
			items : [{
				region : 'north',
				items : [{
					xtype : 'panel',
					width : '100%',
					html : '<img src ="data/TopHeader.png"/>',
					height : 65
				}, {
					xtype : 'toolbar',
					padding : "0 0 0 10",
					border : false,
					items : ['->', {
						text : 'Dashboard:My Task',
						xtype : 'button',
						scale : 'medium',
						name : 'dashboard'

					}, '->', {
						text : 'Welcome (User)',
						xtype : 'button',
						scale : 'medium',
						name : 'user'
					}, '->', {
						text : 'Menu',
						xtype : 'button',
						scale : 'medium',
						name : 'menu'
					}]
				}]

			}, {
				layout : 'vbox',
				region : 'west',
				width : 135,
				height : '100%',
				border : false,
				bodyStyle : {
					"background-color" : "black"
				},
				defaults : {
					margin : "10 0 0 5"
				},

				items : [{
					icon : 'data/dashboard.png',
					xtype : 'button',
					width : 129,
					scale : 'large',
					text : 'Dashboard'
				}, {
					icon : 'data/dashboard.png',
					xtype : 'button',
					width : 129,
					scale : 'large',
					text : 'My Projects'
				}, {
					icon : 'data/dashboard.png',
					xtype : 'button',
					width : 129,
					scale : 'large',
					text : 'My Task'
				}, {
					icon : 'data/dashboard.png',
					xtype : 'button',
					width : 129,
					scale : 'large',
					text : 'My Timesheet'
				}, {
					icon : 'data/dashboard.png',
					xtype : 'button',
					width : 129,
					scale : 'large',
					text : 'My Expense Sheet'
				}, {
					icon : 'data/dashboard.png',
					xtype : 'button',
					width : 129,
					scale : 'large',
					text : 'My Time Off'
				}, {
					icon : 'data/dashboard.png',
					xtype : 'button',
					width : 129,
					scale : 'large',
					text : 'My Reports'
				}, {
					icon : 'data/dashboard.png',
					xtype : 'button',
					width : 129,
					scale : 'large',
					text : 'Manage Approval'
				}]

			}, {
				region : 'center',
				layout : 'auto',
				id : 'centerclass',
				height : "auto",
				padding : "0 20 0 20",
				autoScroll : true,
				border : false,
				items : [{
					flex : 1,
					padding : "0 0 20 0",
					title : 'Search',
					collapsible : true,
					collapsed : true,
					border : false,
					items : [{
						xtype : 'panel',
						border : false,
						title : 'Search Parameters',
						items : [{
							layout : 'hbox',
							items : [{
								xtype : 'panel',
								flex : 1,
								border : false,
								bodyPadding : 10,
								defaults : {
									margin : "10 0 0 0"
								},
								items : [{
									xtype : 'textfield',
									fieldLabel : 'Task ID:',
									name : 'task ID'
								}, {
									xtype : 'combo',
									name : 'project',
									fieldLabel : 'Project',
									store : 'searchdata',
									displayField : 'projectname'
								}, {
									xtype : 'combo',
									fieldLabel : 'Report By',
									name : 'reportby',
									displayField : 'reportby'
								}, {
									xtype : 'combo',
									fieldLabel : 'Completed Status',
									name : 'completedsatus',
									displayField : 'completedstatus'
								}, {
									xtype : 'datefield',
									fieldLabel : 'Created Date:',
									name : 'createddate'
								}, {
									xtype : 'checkbox',
									fieldLabel : 'Include Date Range:',
									name : 'daterange'
								}, {
									xtype : 'datefield',
									fieldLabel : 'Created Date Upto:',
									name : 'createddateupto'
								}, {
									xtype : 'button',
									text : 'Show',
									scale : 'large',
									width : 55,
									margin : "20 0 0 100",
									name : 'show'
								}]
							}, {
								xtype : 'panel',
								flex : 1,
								title : '',
								align : 'stretch',
								width : '100%',
								border : false,
								bodyPadding : 10,
								defaults : {
									margin : "10 0 0 0"
								},
								items : [{
									xtype : 'combo',
									fieldLabel : 'Task Type',
									name : 'tasktype',
									displayField : 'tasktype'
								}, {
									xtype : 'combo',
									fieldLabel : 'Milestone',
									name : 'milestone'
								}, {
									xtype : 'combo',
									fieldLabel : 'Assigned To',
									name : 'assignedto'
								}, {
									xtype : 'combo',
									fieldLabel : 'Task Status',
									name : 'taskstatus'
								}, {
									xtype : 'textarea',
									fieldLabel : 'Description',
									name : 'description'
								}]
							}]
						}]
					}]
				}, {
					xtype : 'panel',
					layout : 'auto',
					title : 'Mass Task',
					collapsible : true,
					collapsed : true,
					border : false,
					items : [{
						xtype : 'panel',
						layout : 'hbox',
						flex : 1,
						title : 'Task Parameters',
						border : false,
						items : [{
							xtype : 'panel',
							flex : 1,
							layout : '',
							border : false,
							bodyPadding : 10,
							items : [{
								xtype : 'combo',
								fieldLabel : 'Task Status:',
								labelAlign : 'right',
								name : 'task ID'

							}, {
								xtype : 'combo',
								fieldLabel : 'Task Type:',
								labelAlign : 'right',
								name : 'task type'
							}, {
								xtype : 'combo',
								fieldLabel : 'priority:',
								labelAlign : 'right',
								name : 'priority'
							}, {
								xtype : 'button',
								text : 'Update',
								scale : 'large',
								margin : "10 0 0 250",
								width : 65
							}]
						}, {
							xtype : 'panel',
							border : false,
							margin : "10 0 0 0",
							flex : 1,
							items : [{
								xtype : 'textfield',
								fieldLabel : 'Task Name:',
								labelAlign : 'right',
								name : 'task name'
							}, {
								xtype : 'textfield',
								fieldLabel : 'Completed %:',
								labelAlign : 'right',
								name : 'completed'
							}, {
								xtype : 'textfield',
								fieldLabel : 'Duration:',
								labelAlign : 'right',
								name : 'Duration'
							}]

						}]
					}]

				}, {
					region : 'south',
					border : false,
					xtype : 'userlist',
					id : 'southside',
					layout : 'auto',
					autoScroll : true,
					height : "50%",
					padding : "5 0 0 0",
					weight : "100%"

				}, {
					xtype : 'button',
					text : 'Add',
					action : 'add',
					align : 'center',
					width : '100',
					scale : 'medium',
					margin : "0 0 0 0"
				}]
			}]
		});
	}
});
