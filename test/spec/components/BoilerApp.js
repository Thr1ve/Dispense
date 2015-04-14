'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var BoilerApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    BoilerApp = require('../../../src/scripts/components/BoilerApp.js');
    component = React.createElement(BoilerApp);
  });

  it('should create a new instance of BoilerApp', function () {
    expect(component).toBeDefined();
  });
});
