var PageView = require('./base');
var templates = require('../templates');
var EscapeTrigger = require('../views/escapeTriggerAC.js');

var log = require('bows')("Product Page");

module.exports = PageView.extend({

    pageTitle: 'Product Page',

    template: templates.pages.productPage,

    props: {
        productId: 'string',
        availableCodes: 'model'
    },

    bindings: {
        'model.title': '[data-hook~=title]',
    },
    
    events : {
        'click .viewCodes' : 'toViewCodes',
        'click .addCodes' : 'toAddCodes'
    },

    keyboardShortcuts : {
         'escape':'returnNavigate'
    },

    initialize: function() {

        this.escapeTriggerAC = new EscapeTrigger({duration:1000});
        this.escapeKeyBuffer = 0;
        this.registerKeyboardShortcuts('productPage');

        var self = this;

        //if we don't have a model attached yet...
        if (!this.model) {

            log('Model not found. Fetching model with id: ' + this.productId + '...');

            //... then search for the model with the product id...
            app.products.getOrFetch(this.productId, {
                all: true
            }, function(err, model) {
                if (err) {
                    log(err);
                } else {
                    //... and add it
                    self.model = model;
                    log('...found Model!', model);
                }
            });
        } else {
            //otherwise, let us know that we already had a model
            log('The Model was found!', this.model);
        }
    },

    render : function() {
        this.renderWithTemplate();
        this.renderSubview(this.escapeTriggerAC, '.prompt');
    },

    toViewCodes : function() {
        app.navigate('/dispenseManager/productStatus/' + this.model.productId);
    },

    toAddCodes : function() {
        app.navigate('/dispenseManager/modifyProduct/' + this.model.productId);
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