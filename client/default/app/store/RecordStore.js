Ext.define('Xpoit.store.RecordStore', {
    extend: 'Ext.data.Store',
    id: 'RecordStore',
    config: {
        model: 'Xpoit.model.RecordModel',
        autoLoad: true,
    }
});