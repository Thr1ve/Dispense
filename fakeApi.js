var _ = require('underscore');

var products = [
    {
        id:1,
        isbn13: '9781118452130',
        title: 'Exploring the Great Beyond'
    },
    {
        id:2,
        isbn13: '9780470290792',
        title: 'Human JavaScript'
    },
    {
        id:3,
        isbn13: '9780471692731',
        title: 'Anatomy and Physiology'
    },
    {
        id:4,
        isbn13: '9781118743210',
        title: 'Infinite Jest'
    },
    {
        id:5,
        isbn13: '9787879254203',
        title: '70-687 Configuring Windows 8.1'
    },
    {
        id:6,
        isbn13: '9780780549120',
        title: 'Lord of the Rings'
    }
];

var id = 7;

function get(id) {
    return _.findWhere(products, {id: parseInt(id + '', 10)});
}

exports.list = function (req, res) {
    res.send(products);
};

exports.get = function (req, res) {
    var found = get(req.params.id);
    res.status(found ? 200 : 404);
    // res.send(found);
    res.send('I GOT IT DONT WORRY ABOUT IT');
};

exports.request = function (req, res) {
    // var ticket = req.body;
    var newCode = {
        id: '1',
        date: new Date().toLocaleDateString(),
        code: 'THIS IS THE CODE WHICH I HATH GIVEN YOU     '
    };

    res.status(201).send(newCode);
};