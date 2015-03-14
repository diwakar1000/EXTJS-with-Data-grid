Ext.define('AM.store.searchdata',{
	extend: 'Ext.data.Store',
	 model: 'AM.model.search',
	 autoLoad: true,
	 proxy: {
	 	type: 'ajax',
	 	api:{
	 		read: 'data/searchcombo.json',
	 		},
	 		reader: {
	 		type: 'json',
	 		root: 'searchcombo',
	 		successProperty: 'success'
	 	}
	 }
});
