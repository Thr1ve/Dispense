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

    setUp : function() {

        var self = this;
        var presets = self.inputTemplates.apply(this);

        console.log('\n');
        console.log('Setting up the Form...');
        console.log('   Config set to: ' + this.data.config + ' ...');

        if(this.data.config === 'HIGHERED') {

            this.includedInputs = presets.higherEd;

            console.log('   ... Obtained HIGHERED config');
            console.dir(this.includedInputs);
            console.log('\n');
            console.log('\n');
        }
        else {

            this.includedInputs = presets.def;

            console.dir('   ...Obtained DEFAULT config');
            console.dir(this.includedInputs);
            console.log('\n');
            console.log('\n');
        }
    },

    data : this.data || {
        config : 'DEFAULT'
    },

    includedInputs : [],

    inputTemplates : function() {
        return {
            higherEd: [
                this.student,
                this.studentEmail,
                this.university,
                this.chatOrTicket,
                this.representative
            ],

             def : [
                this.customerName,
                this.chatOrTicket,
                this.representative
            ]
        };
    },


    representative : new ExtendedInput({

        label      : 'Representative',
        name       : 'representative',
        placeholder: 'Name',
        parent     : this
    }),


    student : new ExtendedInput({

        label      : 'Student',
        name       : 'customerName',
        placeholder: 'Name',
        parent     : this
    }),


    studentEmail : new ExtendedInput({

        label      : 'Student Email',
        name       : 'customerEmail',
        placeholder: 'Email',
        parent     : this
    }),


    university : new ExtendedInput({
        label      : 'University',
        name       : 'university',
        placeholder: 'University',
        parent     : this
    }),


    chatOrTicket : new ExtendedInput({
        label      : 'Chat / Incident Number',
        name       : 'incident',
        placeholder: 'Enter "Chat" or an Incident Number',
        parent     : this
    }),


    customerName : new ExtendedInput({
        label      : 'Customer',
        name       : 'customerName',
        placeholder: 'Name',
        parent     : this
    }),

    fields: function () {
        this.setUp();
        console.log('...Sending Input Fields!!');
        return this.includedInputs;
    }
});
