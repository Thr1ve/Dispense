var _ = require('underscore');

var products = [
    {
        id:1,
        isbn13: '9781118452130',
        title: 'Exploring the Great Beyond',
        author: 'Bob Jones',
        category: 'Higher Education',
        codes: [
            '1CODEExploringTheGreatBeyond',
            '2CODEExploringTheGreatBeyond',
            '3CODEExploringTheGreatBeyond',
            '4CODEExploringTheGreatBeyond',
            '5CODEExploringTheGreatBeyond',
            '6CODEExploringTheGreatBeyond',
            '7CODEExploringTheGreatBeyond',
            '8CODEExploringTheGreatBeyond',
            '9CODEExploringTheGreatBeyond',
            '10CODEExploringTheGreatBeyond',
            '11CODEExploringTheGreatBeyond'
        ]
    },
    {
        id:2,
        isbn13: '9780470290792',
        title: 'Human JavaScript' ,
        author: 'Gordon B',
        category: 'Professional Development',
        codes: [
            '1CODEHumanJavaScript',
            '2CODEHumanJavaScript',
            '3CODEHumanJavaScript',
            '4CODEHumanJavaScript',
            '5CODEHumanJavaScript',
            '6CODEHumanJavaScript',
            '7CODEHumanJavaScript',
            '8CODEHumanJavaScript',
            '9CODEHumanJavaScript',
            '10CODEHumanJavaScript',
            '11CODEHumanJavaScript'
        ]
    },
    {
        id:3,
        isbn13: '9780471692731',
        title: 'Anatomy and Physiology',
        author: 'Chrys C',
        category: 'Trade',
        codes: [
            '1CODEAnatomyAndPhysiology',
            '2CODEAnatomyAndPhysiology',
            '3CODEAnatomyAndPhysiology',
            '4CODEAnatomyAndPhysiology',
            '5CODEAnatomyAndPhysiology',
            '6CODEAnatomyAndPhysiology',
            '7CODEAnatomyAndPhysiology',
            '8CODEAnatomyAndPhysiology',
            '9CODEAnatomyAndPhysiology',
            '10CODEAnatomyAndPhysiology',
            '11CODEAnatomyAndPhysiology'
        ]
    },
    {
        id:4,
        isbn13: '9781118743210',
        title: 'Infinite Jest',
        author: 'David Foster Wallace',
        category: 'Higher Education',
        codes: [
            '1CODEInfiniteJest',
            '2CODEInfiniteJest',
            '3CODEInfiniteJest',
            '4CODEInfiniteJest',
            '5CODEInfiniteJest',
            '6CODEInfiniteJest',
            '7CODEInfiniteJest',
            '8CODEInfiniteJest',
            '9CODEInfiniteJest',
            '10CODEInfiniteJest',
            '11CODEInfiniteJest'
        ]
    },
    {
        id:5,
        isbn13: '9787879254203',
        title: '70-687 Configuring Windows 8.1',
        author: 'Joe Schmoe',
        category: 'Professional Development',
        codes: [
            '1CODEConfigureingWindows',
            '2CODEConfigureingWindows',
            '3CODEConfigureingWindows',
            '4CODEConfigureingWindows',
            '5CODEConfigureingWindows',
            '6CODEConfigureingWindows',
            '7CODEConfigureingWindows',
            '8CODEConfigureingWindows',
            '9CODEConfigureingWindows',
            '10CODEConfigureingWindows',
            '11CODEConfigureingWindows'
        ]
    },
    {
        id:6,
        isbn13: '9780780549120',
        title: 'Lord of the Rings',
        author: 'J.R. Tolkein',
        category: 'Trade',
        codes: [
            '1CODELordOfTheRings',
            '2CODELordOfTheRings',
            '3CODELordOfTheRings',
            '4CODELordOfTheRings',
            '5CODELordOfTheRings',
            '6CODELordOfTheRings',
            '7CODELordOfTheRings',
            '8CODELordOfTheRings',
            '9CODELordOfTheRings',
            '10CODELordOfTheRings',
            '11CODELordOfTheRings'
        ]
    }
];

var id = 7;

function get(id) {
    return _.findWhere(products, {id: parseInt(id + '', 10)});
}

exports.list = function (req, res) {
    res.send(products);
};

exports.request = function (req, res) {
    var newCode = {
        id: '1',
        date: new Date().toLocaleDateString(),
        code: products[0].codes.shift()
    };
    console.log(products[0].codes);

    res.status(201).send(newCode);
};