/ Create a polyfill for bind using javascript

const person = {name : "divesh"}
var dispNameAndCity = function(city) {
  console.log(`Hello folks, 'm ${this.name} and I belong to ${city}`);
}

const dispName = dispNameAndCity.bind(person);
dispName('Bangalore');


Function.prototype.myBind = function (context, ...arg1) {
  var fn = this;
  return function(...arg2) {
    fn.apply(context, [...arg1,...arg2] )
  }
}

const dispName2 = dispNameAndCity.myBind(person);
dispName2('Bangalore')
