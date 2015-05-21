var server = require('./server');
var ds = server.dataSources.mydb;
var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'product', 'availableCodes'];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Looback tables [' + lbTables + '] created in ', ds.adapter.name);
  ds.disconnect();
});