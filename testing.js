
function test(product, oldTable, nCodes){
  var remainingCodes = 500
  var count = 50
  var limit = 60
  var table = !Number.isInteger(oldTable) ? oldTable : product.oldTable
  var toTake = Number.isInteger(nCodes) ?
    (nCodes > remainingCodes ? remainingCodes : nCodes ) :
    (count > limit ? limit : count)

  console.log("table: ", table)
  console.log("toTake: ", toTake)
}

console.log("---[standardObject], 'oldTable from arguments', 450")
test({
  oldTable: "oldTable from Product"
}, "oldTable from arguments", 450)

console.log("---[standardObject], 450")
test({
  oldTable: "oldTable from Product"
}, 450)
