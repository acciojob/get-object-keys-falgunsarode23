//your JS code here. If required.
let student = {
	name : "rakesh"
};

object.__proto__.getkeys = function() {
    return Object.keys(this);
};

console.log(student.getkeys());