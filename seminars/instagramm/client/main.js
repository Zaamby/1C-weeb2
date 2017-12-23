var Vue = require("vue");
var VueRouter = require("vue-router");
var VueResource = require("vue-resource");
var VueJwtMongo = require("vue-jwt-mongo");
var Register = require("./components/register.vue"); 
var Login = require("./components/login.vue");
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueJwtMongo.Client);

var router = new VueRouter();

router.map({
    "/register": { component: Register },
    "/login" : { component : Login }
});

router.start(Vue.extend({}), "#app");
