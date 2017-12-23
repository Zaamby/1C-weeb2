var express = require("express");
var vjm = require("vue-jwt-mongo");

var mongourl = "mongodb://localhost/photofeed";
var secret = "3A8507F8F1D672705A77410063EA45F20919437837100BA68C07492AE6EF8C3D";

var app = express();
var vjmServer = vjm.Server({
    mongoUrl: mongourl,
    jwtSecret: secret
});

app.use(express.static('../client'));

app.post("/auth/register", vjmServer.registerHandler);

app.listen(80);
