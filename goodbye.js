(function (window) {

var goodbye = {};

var pozegnanie = "Goodbye";

goodbye.speak = function (name) {
  console.log(pozegnanie + " " + name);
}

window.goodbye = goodbye;

})(window);