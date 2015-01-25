var FormView      = require('ampersand-form-view');
var InputView     = require('ampersand-input-view');
var templates     = require('../templates');


var log = require('bows')("addProductForm");

var ExtendedInput = InputView.extend({
    template: templates.includes.formInput()
});

module.exports = FormView.extend({

    fields: function () {
        return [

            new ExtendedInput({

                label      : 'Title',
                name       : 'title',
                placeholder: 'The name of the product...',
                parent     : this
            }),

            new ExtendedInput({

                label      : 'ISBN',
                name       : 'isbn13',
                placeholder: 'The 13-digit ISBN with dashes if applicable...',
                required   : false,
                parent     : this
            }),

            new ExtendedInput({
                label      : 'Author',
                name       : 'author',
                placeholder: 'The author of the book if applicable',
                required   : false,
                parent     : this
            }),

        ];
    }
});
