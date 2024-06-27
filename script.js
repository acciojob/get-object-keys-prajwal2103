let Student={
	name:"John"
}
	Object.prototype.getKeys=function(){
	return Object.keys(this);
	
}
console.log(Student.getKeys());