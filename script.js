let Student={
	name:"John"
}
Student.__proto__.getKeys=function(){
	return Object.keys(Student);
	
}
console.log(Student.getKeys());