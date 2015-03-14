Ext.define('AM.view.user.List', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.userlist',
	//special Defination so we can use this thing later on as an xtype.
	title : 'My Task List',
	padding : "0 0 0 0",
	margin : "0 0 0 0 ",
	store : 'Users',
	border : false,
	initComponent : function() {
		this.columns = [{
			header : 'ID',
			dataIndex : 'id',
			width:'auto'
		}, {
			header : 'Task Code',
			dataIndex : 'taskcode',
			width: 'auto'
		}, {
			header : 'Task Name',
			dataIndex : 'taskname'
		}, {
			header : 'Project Code',
			dataIndex : 'projectcode'
		}, {
			header : 'Client Name',
			dataIndex : 'clientname'
		}, {
			header : 'Task Type',
			dataIndex : 'tasktype'
		}, {
			header : 'Assigned By',
			dataIndex : 'assignedby'
		}, {
			header : 'Assigned To',
			dataIndex : 'assignedto'
		}, {
			header : 'Due Date',
			dataIndex : 'duedate'
		}, {
			header : 'Status',
			dataIndex : 'status'
		}, {
			header : 'Priority',
			dataIndex : 'priority'
		}, {
			header : 'Milestone',
			dataIndex : 'milestone'
		}];

		this.callParent(arguments);
	}
}); 