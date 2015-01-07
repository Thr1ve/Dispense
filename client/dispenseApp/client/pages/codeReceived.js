var PageView = require('./base');
var templates = require('../templates');
var CodeView = require('../views/code');

//this is the page where we view the code we have requested.
//The user is sent here by requestCode.js.

//Idea -- this should display different blocks of text containing the received
//code that are copy/pastable for different use-cases

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