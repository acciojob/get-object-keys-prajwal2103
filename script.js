let Student={
	name:"John"
}
	Object.prototype.getKeys=function(){
	return Object.keys(Student);
	
}
console.log(Student.getKeys());