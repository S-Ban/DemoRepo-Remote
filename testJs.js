function clickMe(){
	alert("Hi there!");
}

function yourName(){
 	var name = prompt("Please enter your name","Anonymous");
	if (name != null){
	 document.getElementById("write").innerHTML= "Hello " + name + "! this is a demo.";
	}else{
	 document.getElementById("write").innerHTML= "Hello Anonymus! this is a demo.";
	} 
	
}