//not yet rewritten
var FormView      = require('ampersand-form-view');
var InputView     = require('ampersand-input-view');
var templates     = require('../templates');
var ExtendedInput = InputView.extend({
    template: templates.includes.formInput()
});

module.exports = FormView.extend({
    fields: function () {
      new ExtendedInput({
            label : 'Search',
            name : 'search',
            value : 'zzzzzzzz',
            parent : this
        })
    }
});
