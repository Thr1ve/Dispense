var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.includes.code,
    bindings: {
        'model.date': '[data-hook~=date]',
        'model.code': '[data-hook~=code]'
    }

});