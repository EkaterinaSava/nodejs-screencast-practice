var db = require('db');

// передаем логгеру текущий модуль
var logger = require('logger')(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
  logger(db.getPhrase("Hello") + ', ' + who.name);
}

//console.log('user.js is required!');

// т.к. module.exports = exports = this
// 1. module.exports.User = User; (длинно)
// 2.* exports.User = User;
// 3. this.User = User; (менее универсален: в функции станет другим)

// сделать функцией
module.exports = User;


// вывести объект module
//console.log(module);
