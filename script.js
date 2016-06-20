(function (window) {


var imiona = ["Michal", "Dorota", "jadwiga" , "joanna", "melo", "zbyszek", "Janek", "Justyna"];

for (var i in imiona) {

  var litera = ((imiona[i]).charAt(0)); // charAt(0) - sprawdza pierwszą literę, gdy jest 1 to sprawdza drugi literę (znak)

  if (litera == 'J') {
     window.goodbye.speak(imiona[i]);
  } 
   
  else if (litera == 'j') {
     window.goodbye.speak(imiona[i]);
  } 

  else {
     window.hello.speak(imiona[i]);
  }
}
})(window);