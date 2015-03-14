Ext.define('AM.view.user.Serachform', {
	extend : 'Ext.window.Window',
	alias : 'widget.searchform',
	title : '',
	layout : 'form',
	border : false,
	width : '60%',
	height : '80%',
	autoScroll : true,
	autoSize : true,
	autoShow : true,
	initComponent : function() {
		this.items = [{
			layout : 'auto',
			xtype : 'panel',
			title : 'Add Task',
			autoScroll : true,
			border : false,
			items : [{
				xtype : 'panel',
				title : 'Project Task',
				border : false,
				width: '100%',
				items : [{
					layout : 'hbox',
					items : [{
						xtype : 'panel',
						flex : 1,
						title : '',
						border : false,
						bodyPadding : 10,
						defaults : {
							margin : "10 0 0 0"
						},
						items : [{
							xtype : 'combo',
							fieldLabel : 'Project',
							name : 'projectname'
						}, {
							xtype : 'combo',
							name : 'parenttask',
							fieldLabel : 'Parent Task',
							displayField : 'parenttask'
						}, {
							xtype : 'combo',
							fieldLabel : 'Milestone',
							name : 'milestone',
							displayField : 'milestone'
						}, {
							xtype : 'textfield',
							fieldLabel : 'Task Code',
							name : 'taskcode',
							displayField : 'taskcode'
						}, {
							xtype : 'textfield',
							fieldLabel : 'Task Name',
							name : 'taskname',
							displayfield : 'taskname',
						}, {
							xtype : 'textarea',
							fieldLabel : 'Task Description',
							name : 'taskdescription'
						}, {
							xtype : 'combo',
							fieldLabel : 'Task Type',
							name : 'tasktype'
						}, {
							xtype : 'combo',
							fieldLabel : 'Priority',
							name : 'priority'
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
							xtype : 'datefield',
							fieldLabel : 'Due Date',
							name : 'duedate',
						}, {
							xtype : 'checkbox',
							fieldLabel : 'Parent Task'
						}, {
							xtype : 'checkbox',
							fieldLabel : 'All Employee Task',
						}, {
							xtype : 'checkbox',
							fieldLabel : 'All Project Task',
						}, {
							xtype : 'combo',
							fieldLabel : 'Assigned To',
							name : 'assignedto',
							displayField : 'assignedto'
						}]
					}]
				}]
			}]
		}, {
			layout : 'accordion',
			items : [{
				xtype : 'panel',
				border : false,
				layout : 'hbox',
				title : 'Task Status',
				items : [{
					xtype : 'panel',
					width : '50%',
					border : false,
					margin : "10 5 5 0",
					padding : "10 5 5 0",
					items : [{
						xtype : 'datefield',
						fieldLabel : 'Start Date',
					}, {
						xtype : 'combo',
						fieldLabel : 'Task Status',
						name : 'taskstatus',
						displayField : 'taskstatus'
					}, {
						xtype : 'checkbox',
						fieldLabel : 'Completed',

					}]
				}, {
					xtype : 'panel',
					margin : "10 5 5 0",
					padding : "10 5 5 0",
					border : false,
					items : [{
						xtype : 'textfield',
						fieldLabel : 'Duration Hours',
						value : 8
					}, {
						xtype : 'textfield',
						fieldLabel : 'Completed %',
						value : 0
					}]
				}]
			}, {
				xtype : 'panel',
				title : 'Task Estimates',
				items : [{
					xtype : 'panel',
					layout : 'hbox',
					border : false,
					width : '100%',
					items : [{
						xtype : 'combo',
						fieldLabel : 'Estimated Cost',

					}, {
						xtype : 'textfield',
						fieldLabel : '',
						value : 0
					}]
				}, {
					xtype : 'textfield',
					fieldLabel : 'Estimated Time (Hours)',
					value : 0
				}]
			}, {
				xtype : 'panel',
				title : 'Task Billing Rate',
				layout : 'hbox',
				items : [{
					xtype : 'panel',
					width : '50%',
					border : false,
					items : [{
						xtype : 'checkbox',
						fieldLabel : 'Billable',
						checked : true
					}, {
						xtype : 'combo',
						fieldLabel : 'Work Type',
						name : 'worktype'
					}, {
						xtype : 'combo',
						fieldLabel : 'Employee Rate Currency'
					}, {
						xtype : 'combo',
						fieldLabel : 'Billing Rate Currency'
					}, {
						xtype : 'datefield',
						fieldLabel : 'Billing Start Date',
					}]
				}, {
					xtype : 'panel',
					width : '50%',
					border : false,
					items : [{
						xtype : 'textfield',
						fieldLabel : 'Employee Rate',
						value : 0
					}, {
						xtype : 'textfield',
						fieldLabel : 'Billing Rate',
						value : 0
					}, {
						xtype : 'datefield',
						fieldLabel : 'Billing Rate End Date'
					}]
				}]
			}, {
				xtype : 'panel',
				title : 'Task Attachment',
				items : [{
					xtype : 'textfield',
					fieldLabel : 'Attachment Name'
				},{
					xtype: 'filebutton',
					text: 'Choose File',
					fieldLabel:'File Path'
				}]
			}]
		}];
		this.buttons= [{
		 text: 'Add',
		 scope: this,
		},{
			text: 'Cancel',
			scope: this,
			handler: this.close
		}];

		this.callParent(arguments);
	}
});
// End of Useredit
