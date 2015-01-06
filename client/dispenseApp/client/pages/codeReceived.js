var PageView = require('./base');
var templates = require('../templates');
var CodeView = require('../views/code');

//this is the page where we view the code we have requested.
//The user is sent here by requestCode.js.

module.exports = PageView.extend({

    pageTitle: 'Received Code',

    template: templates.pages.codeReceived,

    //find the <ul> with the data-hook "code" and attach our code view / render it
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