//not yet rewritten
var View = require('ampersand-view');
var templates = require('../templates');


module.exports = View.extend({
    template: templates.includes.product,
    bindings: {
        'model.isbn13': '[data-hook~=isbn13]',
        'model.title': '[data-hook~=title]'
    }
});