var PageView = require('./base');
var templates = require('../templates');

//UNDER CONSTRUCTIONS
//this will be the second search option
//all titles displayed, filter titles by
//selecting "tags" or "categories" such as "dummies" or "Higher Ed"
//filters will be tied to allow user to quickly manipulate what data is shown

module.exports = PageView.extend({
    pageTitle: 'browse',
    template: templates.pages.browse
});
