Ext.define('Xpoit.store.Guests', {
    extend: 'Ext.data.Store',

    requires: [
        'Xpoit.model.Guest'
    ],

    config: {
        model: 'Xpoit.model.Guest',
        autoLoad: true,

        proxy: {
            type: 'ajax',
            url: 'data/GuestData.json',
            reader: {
                type: 'json',
                rootProperty: 'guests'
            }
        },

        sorters: [{
            property : 'guestName',
            direction: 'ASC'
        }]

    }
});