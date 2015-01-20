var PageView = require('./base');
var templates = require('../templates');
var CodeView = require('../views/code');
var Code_wpView = require('../views/code_wp');
var EscapeTrigger = require('../views/escapeTriggerAC.js');

var log = require('bows')("Code Received Page");

//this is the page where we view the code we have requested.
//The user is sent here by requestCode.js.


//We need: 
//  - a way to figure out what standard text to wrap code with based on product
//  - a way to create and save your own custom standard text
//  - one click copy to clipboard

module.exports = PageView.extend({

    pageTitle: 'Received Code',

    template: templates.pages.codeReceived,

    keyboardShortcuts : {
         'escape':'returnNavigate'
    },

    initialize : function() {
        this.escapeTriggerAC = new EscapeTrigger({duration:1000});
        this.escapeKeyBuffer = 0;
        this.registerKeyboardShortcuts('codeReceived');
    },

    setModel: function() {
        this.model = app.newCode.models[0];
    },

    render: function() {
        //get the model
        this.setModel();

        app.io.emit('chat message', 'Code: ' + this.model.code + ' -- Rep: ' + this.model.representative + ' -- Date: ' + this.model.date);

        this.renderWithTemplate();
        this.renderSubview(this.escapeTriggerAC, '.prompt');

        //add our subviews
        this.renderSubview(new CodeView({
                model: this.model,
                collection: app.newCode
            }), '[data-hook=codeHolder]');

        this.renderSubview(new Code_wpView({
                model: this.model,
                collection: app.newCode
            }), '[data-hook=codeHolder]');

    },

    returnNavigate : function() {
        log('returnNavigate function has been called');

        var contains =  this.query('.escapePrompt').classList.contains('active');

        if(this.escapeKeyBuffer === 0){
            this.escapeKeyBuffer++ ;
            this.escapeTriggerAC.reset();
        }
        else if( contains ){
            console.log(this.query('.escapePrompt').classList);
            this.escapeKeyBuffer = 0;
            app.navigate('/dispenseApp');
            //this makes it so codeReceived page is not recorded
            //in history...change this if/when we figure out way to
            //better manage the codes the user has requested
            // app.redirectTo('/dispenseApp');
        }
        else{
            escapeKeyBuffer = 0;
            this.escapeTriggerAC.reset();
        }
    }

});