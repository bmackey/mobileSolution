Ext.define('Xpoit.view.ProjectList', {
  extend: 'Ext.List',
  xtype: 'projectListPanel',
  id: 'projectList',
  cls: 'projectList',
  style: 'background-color:#6d6e71;',
  config: {
    title: 'Project List',
    grouped: true,
    indexBar: true,
    itemTpl: '{project} {commercial} {title}',
    store: 'Projects',

    onItemDisclosure: true
  }
});