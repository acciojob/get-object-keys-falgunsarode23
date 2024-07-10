//your JS code here. If required.
let student = {
	name : "rakesh"
};

object.__proto__.getkeys = function() {
    return Object.keys(this);
};

getkeys(student);

console.log(student.getkeys());