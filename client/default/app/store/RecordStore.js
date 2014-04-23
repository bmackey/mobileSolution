Ext.define('Xpoit.store.RecordStore', {
    extend: 'Ext.data.Store',
    id: 'RecordStore',
    config: {
        model: 'Xpoit.model.RecordModel',
        autoLoad: true,
        sorters: 'lname',
        grouper: function(record) {
            return record.get('fullname1')[0];
        },
        proxy: {
            type: 'ajax',
            noCache: false,
            enablePagingParams: false,
            url: 'resources/json/cust_bunzl.json',
            reader: {
                type: 'json',
                rootProperty: 'customer'
            }
        }
    }
});