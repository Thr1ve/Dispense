var FormView      = require('ampersand-form-view');
var InputView     = require('ampersand-input-view');
var templates     = require('../templates');
var ExtendedInput = InputView.extend({
    template: templates.includes.formInput()
});


//this needs to be made to accept an actual array OR the preset template
//so we can later allow manager to individually configure which input fields
//are included

//Form fields / makeup / etc. needs to be abstracted to a model


module.exports = FormView.extend({

     fields: function () {
        return [

            new ExtendedInput({

                label      : 'Student',
                name       : 'customerName',
                placeholder: 'Name',
                parent     : this
            }),

            new ExtendedInput({

                label      : 'Student Email',
                name       : 'customerEmail',
                placeholder: 'Email',
                parent     : this
            }),

            new ExtendedInput({
                label      : 'University',
                name       : 'university',
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
                placeholder: 'Enter "Chat" or an Incident Number',
                parent     : this
            }),
        ];
    }
});
