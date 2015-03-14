Ext.define('AM.model.User', {
	extend : 'Ext.data.Model',
	fields : ['id', 'taskcode', 'taskname', 'projectcode', 'clientname',
	 'tasktype', 'assignedby', 'assignedto', 'duedate', 'status', 
	 'priority', 'milestone' ]
});
