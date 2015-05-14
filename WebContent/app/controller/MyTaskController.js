Ext.define('AM.controller.MyTaskController', {
    extend: 'Ext.app.Controller',
    views: ['user.List', 'user.Edit', 'user.Serachform', 'user.Myproject','user.Myprojectlist'],
    stores: ['Users','searchdata','Myprojectstore'],
    models:['User','search','Myproject'],
 
    init: function() {
    this.control({// listens the events happenig at views. 
    	//Finds every child that are the direct child of the viewport. 
            'viewport userlist': {
                itemdblclick: this. editUser,
            },
            //find the Save button with the action
            'useredit button[action=update]': {
                click: this.updateUser,
            },
            
            	'viewport button[action=add]':{
            		click:this.dataAdd
            	},
            'viewport button[text= "My Projects"]':{
            	click: this.projectpage,
            }
        });
    },
 //loads and fires the form to edit the document
  editUser: function(grid, record) {
      var view = Ext.widget('useredit');
      view.down('form').loadRecord(record);
   },
   updateUser: function(button){
   	 var win    = button.up('window'),//finds the current window
        form   = win.down('form'),// Finds the current Form
        record = form.getRecord(),//gets the form record
        values = form.getValues();//get the values from the form record
        record.set(values);//sets the updated value to the record
        win.close();//closes the window. 
        this.getUsersStore().sync();
   },
  dataAdd: function(form) {
     var wedgetSearch = Ext.widget('searchform');
     wedgetSearch.renderTo ='centerclass'
    },
   projectpage: function (form){
   	 var project= Ext.widget ('myproject');
   	project.dowm ('form').loadRecord (record)
   }
});
