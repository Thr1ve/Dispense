//not yet rewritten
var FormView      = require('ampersand-form-view');
var InputView     = require('ampersand-input-view');
var templates     = require('../templates');
var ExtendedInput = InputView.extend({
    template: templates.includes.formInput()
});

module.exports = FormView.extend({

    props : {
        category : 'string'

    }

    fields : function () {
        console.log(this.category);
        return [

            new ExtendedInput({
                label: 'Representative',
                name: 'representative',
                placeholder: 'Name',
                parent: this
            }),

            new ExtendedInput({
                label: 'Student',
                name: 'customerName',
                placeholder: 'Name',
                parent: this
            }),

            new ExtendedInput({
                label: 'Student Email',
                name: 'customerEmail',
                placeholder: 'Email',
                parent: this
            }),

            new ExtendedInput({
                label: 'University',
                name: 'university',
                placeholder: 'University',
                parent: this
            }),

            new ExtendedInput({
                label: 'Chat / Incident Number',
                name: 'incident',
                placeholder: 'Enter "Chat" or an Incident Number',
                parent: this
            }),
        ];
    }
});
