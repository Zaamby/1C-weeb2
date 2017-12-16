var express = require("express");
var vjm = require("vue-jwt-mongo");

var mongourl = "mongodb://localhost/photofeed";
var secret = "F6FJD1bekyFoo0HEbBnDdRIvgAjtksnpLlvsKNVH7lFGzBKhs0Zp5KUuCOaJqRt";

var app = express();
var vjmServer = vjm.Server({
    mongoUrl: mongoUrl,
    jwtSecret: secret
});

app.use(express.static('../client'));

app.post("/auth/register", vjmServer.registerHandler);

app.listen(80);
