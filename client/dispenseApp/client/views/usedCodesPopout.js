var PageView = require('./base');
var templates = require('../templates');

var log = require('bows')('Used Codes Popout');



module.exports = PageView.extend({

    pageTitle: 'Used Codes List',

    template: templates.pages.usedCodesPopout,

    keyboardShortcuts : {

    },

    initialize : function() {

    },

    render : function() {

    }
});
