Ext.define('AM.view.user.Edit', {
	extend : 'Ext.window.Window',
	alias : 'widget.useredit',
	title : 'Task  Edit Form',
	layout : 'form',
	border : true,
	width : '60%',
	height : '80%',
	autoScroll : true,
	autoSize : true,
	autoShow : true,
	initComponent : function() {
		this.items = [{
			xtype : 'form',
			border : false,
			items : [{
				xtype : 'button',
				text : 'Audit Trail',
				name : 'auditform',
				action : 'update',
				scale : 'large'
			}, {
				xtype : 'panel',
				layout : 'auto',
				name : 'audittrials',
				collapsible : true,
				collasped : true,
				border : false,
				title : 'Project Task Information',
				items : [{
					xtype : 'panel',
					name : 'auditform',
					border : false,
					title : 'Project Task'
				}, {
					border : false,
					items : [{
						layout : 'hbox',
						border : false,
						items : [{
							xtype : 'panel',
							flex : 1,
							border : false,
							items : [{
								xtype : 'textfield',
								name : 'id',
								fieldLabel : 'Task ID',
								readOnly : true
							}, {
								xtype : 'combo',
								name : 'parenttask',
								fieldLabel : 'Parent Task'

							}, {
								xtype : 'combo',
								name : 'project',
								fieldLabel : 'Project',
								disabled : true

							}, {
								xtype : 'textfield',
								name : 'taskcode',
								fieldLabel : 'Task Code'
							}, {
								xtype : 'combo',
								name : 'milestone',
								fieldLabel : 'Milestone'

							}, {
								xtype : 'textfield',
								name : 'taskname',
								fieldLabel : 'Task Name'
							}, {
								xtype : 'textarea',
								name : 'taskdescription',
								fieldLabel : 'Task Description'
							}, {
								xtype : 'combo',
								name : 'tasktype',
								fieldLabel : 'Task Type'
							}, {
								xtype : 'numberfield',
								name : 'duration',
								fieldLabel : 'Duration'
							}, {
								xtype : 'textfield',
								name : 'completed',
								fieldLabel : 'Completed %'
							}, {
								xtype : 'checkbox',
								name : 'allemployteask',
								fieldLabel : 'All Employee Task'
							}, {
								xtype : 'checkbox',
								name : 'checkcompleted',
								fieldLabel : 'Completed'
							}, {
								xtype : 'checkbox',
								name : 'reopen',
								fieldLabel : 'IsReOpen'
							}]
						}, {
							xtype : 'panel',
							flex : 1,
							border : false,
							padding : "200 0 0 0",
							items : [{
								xtype : 'combo',
								name : 'status',
								fieldLabel : 'Task Status'
							}, {
								xtype : 'combo',
								name : 'priority',
								fieldLabel : 'Priority'
							}, {
								xtype : 'datefield',
								name : 'duedate',
								fieldLabel : 'Due Date'
							}, {
								xtype : 'checkbox',
								name : 'allprojectteask',
								fieldLabel : 'AllProject Task'
							}, {
								xtype : 'checkbox',
								name : 'parent',
								fieldLabel : 'Parent'
							}, {
								xtype : 'checkbox',
								name : 'billable',
								fieldLabel : 'Billable',
								checked : true
							}]
						}]
					}, {
						xtype : 'panel',

						name : 'assignto',
						title : 'Assigned To',
						border : false,
						items : [{

							xtype : 'combo',
							name : 'assignedto',
							fieldLabel : 'Assigned To',
							hideTrigger : true,
							padding : "20 0 0 0",
						}]
					}, {
						xtype : 'panel',
						collapsible : true,
						collapsed : true,
						name : 'estimates',
						title : 'Estimates',
						border : false,
						items : [{
							xtype : 'textfield',
							name : 'estimatedcost',
							fieldLabel : 'Estimated Cost',
							value : 4000
						}, {
							xtype : 'textfield',
							name : 'estimatedhours',
							fieldLabel : 'Estimated Hours',
							value : 40
						}]
					}, {
						xtype : 'panel',
						layout : 'hbox',
						name : 'buttons',
						border : false,
						items : [{
							xtype : 'button',
							name : 'update',
							margin : "0 20 0 0",
							text : 'Update',
							scale : 'medium'
						}, {
							xtype : 'button',
							text : 'Cancel',
							scale : 'medium'
						}]
					}]
				}]
			}, {
				xtype : 'panel',
				layout : 'accordion',
				width : '100%',
				items : [{
					xtype : 'panel',
					title : 'Comments Lists',
					items : [{
						xtype : 'button',
						text : 'Add Comments'
					}]
				}, {
					xtype : 'panel',
					title : 'Attachment',
					items : [{
						xtype : 'filefield',
						name : 'file',
						fieldLabel : 'Upload File'
					}, {
						xtype : 'button',
						text : 'Add Attachment'
					}]
				}]
			}]//form items
		}//End of Form
		];
		//End of this.items.
		this.buttons = [{

			text : 'Cancel',
			scope : this,
			handler : this.close
		}];
		this.callParent(arguments);
	}//End of Component Function
});
// End of Useredit
