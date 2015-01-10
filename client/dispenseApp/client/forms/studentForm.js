var FormView      = require('ampersand-form-view');
var InputView     = require('ampersand-input-view');
var templates     = require('../templates');
var ExtendedInput = InputView.extend({
    template: templates.includes.formInput()
});

//this defines the input fields that a representative is asked
//to fill out when requesting a code. Form View and Input View work together more or less
//as one piece
// https://github.com/AmpersandJS/ampersand-form-view
// https://github.com/AmpersandJS/ampersand-input-view
// http://ampersandjs.com/learn/forms



//future work (?):
//this needs to be made to accept an actual array OR the preset template
//so we can later allow manager to individually configure which input fields
//are included

//Form fields / makeup / etc. needs to be abstracted to a model ??


module.exports = FormView.extend({

     fields: function () {
        return [

            new ExtendedInput({

                label      : 'Customer',
                name       : 'customerName',
                placeholder: 'Name',
                parent     : this
            }),

            new ExtendedInput({

                label      : 'Customer Email',
                name       : 'customerEmail',
                placeholder: 'Email',
                parent     : this
            }),

            new ExtendedInput({
                label      : 'University or Business',
                name       : 'universityOrBusiness',
                placeholder: 'University',
                parent     : this
            }),

            new ExtendedInput({

                label      : 'Representative',
                name       : 'representative',
                placeholder: 'Name',
                parent     : this
            }),

            new ExtendedInput({
                label      : 'Chat / Incident Number',
                name       : 'chatOrTicket',
                placeholder: 'Enter the word "Chat" or an Incident Number',
                parent     : this
            }),
        ];
    }
});
