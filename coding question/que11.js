//How do you check if a string contains only digits?


String.prototype.isNumber = function(){return /^\d+$/.test(this);}
console.log("123123".isNumber()); // outputs true
console.log("+12".isNumber()); // outputs false
