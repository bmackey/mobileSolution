Ext.define('Xpoit.view.StudentList', {
  extend: 'Ext.Panel',
  xtype: 'studentList',
  id: 'studentList',
  cls: 'studentList',
  config: {
    layout: 'vbox',
    items: [{
      xtype: 'spacer',
      height: '50px'
    }, {
      xtype: 'list',
      id: 'studentListItem',
      flex: 1,
      store: 'RecordStore',
      itemTpl: '{fname}{lanme}',
    }]
  }
});