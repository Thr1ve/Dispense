var PageView = require('./base');
var templates = require('../templates');
var AmpersandInputView = require('ampersand-input-view');


module.exports = PageView.extend({
    pageTitle: 'home',
    template: templates.pages.B_home
});

//We need to render the necessary panes here
//would the filtering mechanisms be here?
//  -can we maybe export the filtering to a module?

// var myInput = new AmpersandInputView({
//     name: 'company name',
//     value: '&yet'
// });
// myInput.render();
// console.log(myInput.input.value); //=> '&yet'

// myInput.setValue('something else');
// console.log(myInput.input.value); //=> 'something else'
// myInput.setValue('something else');
// myInput.reset();
// console.log(myInput.input.value); //=> '&yet'