Ext.define('AM.view.user.Myprojectlist', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.projectlist',
	title : 'Project List',
	layout: 'auto',
	width: '100%',
	store : 'Myprojectstore',
	initComponent: function() {
		this.columns = [{
			header : 'ID',
			dataIndex : 'id'
		}, {
			header : 'Code',
			dataIndex : 'code'
		}, {
			header : 'Project Name',
			dataIndex : 'projectname'
		}, {
			header : 'Client Name',
			dataIndex : 'clientname'
		}, {
			header : 'Description',
			dataIndex : 'description'
		}, {
			header : 'Status',
			dataIndex : 'status'
		}, {
			header : 'Gantt',
			dataIndex : 'gantt'
		}, {
			header : 'Task',
			//html: '<a href= index.html>clickhere</a>',
			dataIndex : 'task'
		}, {
			xtype: 'actioncolumn',
			width: 50,
			header : 'Manage',
			items: [{
				icon: 'data/manage.png'
			}]//dataIndex : 'manage'
		}, {xtype: 'actioncolumn',
			header : '',
			width: 50,
			items:[{
				icon: 'data/email.jpg'
			}]
		}];
	this.callParent(arguments);
	}
	
});
