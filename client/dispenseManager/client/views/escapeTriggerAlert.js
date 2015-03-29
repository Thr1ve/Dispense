var View = require('ampersand-auto-closing-view');


module.exports = View.extend({
    template: '<div class="escapePrompt alert alert-info" role="alert">Press Escape again to return to search</div>',
    initialize: function () {
    }
});