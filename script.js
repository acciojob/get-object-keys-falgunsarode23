//your JS code here. If required.
let student = {
	name : "rakesh"
};

object.prototype.getkeys = function() {
    return Object.keys(this);
};

console.log(student.getkeys());