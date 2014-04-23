Ext.define('Xpoit.view.StudentList', {
  extend: 'Ext.Panel',
  xtype: 'studentListView',
  id: 'studentListView',
  cls: 'studentListView',
  config: {
    layout: 'vbox',
    items: [{
      xtype: 'spacer',
      height: '50px'
    }, {
      xtype: 'list',
      id: 'studentList',
      flex: 1,
      store: 'RecordStore',
      itemTpl: '{fname}{lanme}',
    }]
  }
});