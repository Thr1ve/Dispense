var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.includes.chatTemplate_wp,
    bindings: {
        'model.code': '[data-hook~=code]',
    }

});