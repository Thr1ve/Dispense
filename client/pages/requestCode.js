/*global app*/
var PageView    = require('./base');
var templates   = require('../templates');
var StudentForm = require('../forms/studentForm.js');

module.exports = PageView.extend({
    pageTitle: 'Request Code',
    template: templates.pages.requestCode,
    subviews: {
        form: {
            container: 'form',
            prepareView: function (el) {
                return new StudentForm({
                    el: el,
                    submitCallback: function (data) {
                        app.newCode.create(data, {
                            wait: true,
                            success: function () {

                                app.navigate('/codeReceived');

                            }
                        });
                    }
                });
            }
        }
    }
});
