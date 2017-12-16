var Vue = require("vue");
var VueRouter = require("vue-router");
var VueResourse = require("vue-resource");
var VueJwtMongo = require("vue-jwt-mongo");
var Register = require("./components/register.vue"); 
Vue.use(VueRouter);
Vue.use(VueJwtMongo.Client);
Vue.use(VueRouter);

var router = new VueRouter(); 

router.map({
    "/register": { component: Register }
});

router.start(Vue.extend({}), "app");