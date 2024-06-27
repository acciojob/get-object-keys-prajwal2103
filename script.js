let Student={
	name:"Prajwal"
}
Student.__proto__.getKeys=function(){
	return Object.keys(Student);
	
}
console.log(Student.getKeys());