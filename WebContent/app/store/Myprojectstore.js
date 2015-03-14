Ext.define('AM.store.Myprojectstore', {
	extend : 'Ext.data.Store',
	model : 'AM.model.Myproject',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		api : {
			read : 'data/myprojectlist.json',
		},
		reader : {
			type : 'json',
			root : 'myprojectlist',
			successProperty : 'success'
		}
	}
});
