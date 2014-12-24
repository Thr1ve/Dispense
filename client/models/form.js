// form Model - form.js
var AmpModel = require('ampersand-model');


module.exports = AmpModel.extend({

    //initialize might take data received and create a
    //form with correct input fields
    //or rather, create an event handler that would
    initialize : function() {

    },

    props: {
        id: ['string']
    },

    //the data fields would be the 'session' for the lifespan of this model, no?
    session: {


        representative: {

            label: 'Representative',
            name: 'representativeName',
            placeholder: 'Name',
        },


        chatOrTicket: {

            label: 'Chat / Ticket',
            name: 'chatOrTicket',
            placeholder: 'Enter "Chat" or an Incident Number',
        },


        customer: {

            label: 'Customer',
            name: 'customerName',
            placeholder: 'Name',
        },


        customerEmail: {

            label: 'Customer\'s Email',
            name: 'customerEmail',
            placeholder: 'Email',
        },


        student: {

            label: 'Student',
            name: 'studentName',
            placeholder: 'Name',
        },


        studentEmail: {

            label: 'Stuent\'s Email',
            name: 'studentEmail',
            placeholder: 'Email',
        },


        university: {

            label: 'University',
            name: 'university',
            placeholder: 'The University that this student attends',
        }
    }
});