Ext.define('Xpoit.view.StudentList', {
  extend: 'Ext.List',
  xtype: 'studentListPanel',
  id: 'studentList',
  cls: 'studentList',
  style: 'background-color:#6d6e71;',
  config: {
    title: 'Student List',
    grouped: true,
    indexBar: true,
    itemTpl: '{fname} {lname}',
    store: 'Students',

    onItemDisclosure: true
  }
});