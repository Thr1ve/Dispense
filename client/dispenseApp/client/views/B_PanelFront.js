var View = require('ampersand-view');
var templates = require('../templates');

//this is a view which renders the information for a single product to
//a "panel" and assigns a click handler to said panel

module.exports = View.extend({

    template: templates.includes.product,

    bindings: {
        'model.isbn13': '[data-hook~=isbn13]',
        'model.title': '[data-hook~=title]'
    },

    events : {
        'click' : 'requestCode'
    },

    requestCode : function() {
        app.navigate('/dispenseApp/requestCode/' + this.model.id);
    }

});