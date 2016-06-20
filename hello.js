(function (window) {
var hello = {};

var powitanie = "Hello";

hello.speak = function (name) {
  console.log(powitanie + " " + name);
}

window.hello = hello;

})(window);