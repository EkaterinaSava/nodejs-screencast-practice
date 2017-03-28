var user = require('./user.js');

var vasya = new user.User("Вася");
var petya = new user.User("Петя");

vasya.hello(petya);
