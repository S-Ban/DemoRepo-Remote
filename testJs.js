function clickMe(){
	alert("Hi there!");
}

function yourName(){
 	var name = propmt("Please enter your name");
	if (name != null){
	 document.write("Hello " + name);
	}else{
	 document.write("Hello Anonymus");
	} 
	
}