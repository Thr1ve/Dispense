var FormView      = require('ampersand-form-view');
var InputView     = require('ampersand-input-view');
var templates     = require('../templates');


var log = require('bows')("addCodesForm");

var ExtendedInput = InputView.extend({

    template: templates.includes.formTextArea(),

    derived: {
        value: {
            deps:['inputValue'],
            fn: function(){
                return this.format(this.inputValue);
            }
        }
    },

    format: function(input) {
				//console.log(input);
        var formatted = input
            //remove spaces
            //.replace(/\s/g,'')
            //remove quotes
            //.replace(/['"]/g,'')
            //separate by commas
            //.split(',')
						//separate by newline
						.split('\n')
            //remove empty/null/undefined values from array
            .filter(function(e){return e;});
        return formatted;
    }

});

module.exports = FormView.extend({
    fields: function () {
        return [
            new ExtendedInput({
                label : 'Add Codes here',
                name : 'newCodes',
                placeholder: 'Add a new-line separated list of codes here...',
                parent : this
            })

        ];
    }
});
