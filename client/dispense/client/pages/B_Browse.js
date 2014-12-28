var PageView = require('./base');
var templates = require('../templates');


module.exports = PageView.extend({
    pageTitle: 'browse',
    template: templates.pages.browse
});
