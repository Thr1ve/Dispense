// form Collection - form-collection.js
var AmpCollection = require('ampersand-rest-collection');
var form = require('./form');


module.exports = AmpCollection.extend({

    model: form,

    url: '/api/form'

    //this should create a model with the given template or inputs
    // craft : function(mats) {

    // },



});