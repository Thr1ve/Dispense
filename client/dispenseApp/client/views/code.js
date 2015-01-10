var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.includes.code,
    bindings: {
        'model.code': '[data-hook~=code]',
        'model.date': '[data-hook~=date]',
        'model.representative': '[data-hook~=representative]',
        'model.chatOrTicket': '[data-hook~=chatOrTicket]',
        'model.customerName': '[data-hook~=customerName]',
        'model.customerEmail': '[data-hook~=customerEmail]',
        'model.universityOrBusiness': '[data-hook~=universityOrBusiness]',
    }

});