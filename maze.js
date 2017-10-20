var result = false;
window.onload = function(){					
	var query = document.querySelectorAll(".boundary");	
	var win   = document.getElementById("end");
	var touch = document.getElementById('start');
	var page  = document.getElementById("maze");
	touch.onclick=Start;
	win.onmouseover = End;
	page.onmouseleave=changeColour;
	for(var i = 0;i < query.length ; i++){
		query[i].onmouseover=changeColour; 		
		}
    }	
function changeColour(){    
	var query = document.querySelectorAll(".boundary");
	result = true;
	for(let index = 0; index<query.length-1; index++){
		query[index].setAttribute("class","boundary youlose");							
		 }
	}
	
function End(){
	var win = document.getElementById("status");
    if(result) {
        win.innerHTML=" you lose";
    } 
	else{
        win.innerHTML=" you win";
    }
}

function Start(){
	result = false;
	window.location.reload();
}
