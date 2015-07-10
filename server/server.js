var loopback = require("loopback")
var boot = require("loopback-boot")
var path = require("path")
var shelljs = require("shelljs")
var app = module.exports = loopback()

var Vantage = require("vantage")
var vantage = new Vantage()

vantage
  .command("ls")
  .description("test ls command")
  .action(function(args, cb ) {
    console.log(shelljs.ls("./"))
    cb()
  })

vantage
  .command("printenv")
  .description("print environment variables")
  .action(function(args, cb ) {
    console.log(shelljs.exec("printenv"))
    cb()
  })

vantage
  .command("listen5432")
  .description("see what's on port 5432")
  .action(function(args, cb ) {
    console.log(shelljs.exec("netstat -tulpn | grep :5432", function(code, output){
      console.log("Exit code:", code)
      console.log("Program output:", output)
    }))
    cb()
  })

vantage
  .command("hosts")
  .description("show /etc/hosts")
  .action(function(args, cb ) {
    console.log(shelljs.exec("cat /etc/hosts", function(code, output){
      console.log("Exit code:", code)
      console.log("Program output:", output)
    }))
    cb()
  })

boot(app, __dirname)

/////////////////////////////////
// -- Mount static files here--
// All static middleware should be registered at the end, as all requests
// passing the static middleware are hitting the file system
// Example:
// app.use(loopback.static(path.resolve(__dirname, "../client")))

var dispenseApp = path.resolve(__dirname, "../client/dispenseApp")
var dispenseManager = path.resolve(__dirname, "../client/dispenseManager")

app.use(loopback.static(dispenseApp))
app.use(loopback.static(dispenseManager))

app.get("/dispenseApp*", function(req, res){
   res.sendFile(dispenseApp + "/index.html")
})

app.get("/dispenseManager*", function(req, res){
   res.sendFile(dispenseManager + "/index.html")
})

////////////////////////////////

app.start = function() {
  // start the web server
  // vantage
  //   .delimiter("dispense~$")
  //   .listen(app, 8080)
  //   .show()
  return app.listen(function() {
    app.emit("started")
    console.log("Web server listening at: %s", app.get("url"))
  })
}

// start the server if `$ node server.js`
if (require.main === module) {
  app.start()
}
