//not yet rewritten
var PageView = require('./base');
var templates = require('../templates');
var CodeView = require('../views/code');

module.exports = PageView.extend({

    pageTitle: 'Received Code',

    template: templates.pages.codeReceived,

    render: function () {
        this.renderWithTemplate();
        this.renderCollection(this.collection, CodeView, this.queryByHook('code'));
        if (!this.collection.length) {
            this.fetchCollection();
        }
    },
    fetchCollection: function () {
        this.collection.fetch();
        return false;
    }
});