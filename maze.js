var result = false;
window.onload=function(){					
						var query = document.querySelectorAll(".boundary");	
						var win = document.getElementById("end");	
						document.getElementById('start').onclick=Start;
						win.onmouseover = End;
						for(var i =0;i < query.length ; i++){
							query[i].addEventListener('mouseover',changeColour); 
							function changeColour(){
							result = true;
							for(let index = 0; index<query.length-1; index++){
								query[index].setAttribute("class","boundary youlose");							
							 }
						}
					}
				}	
function End(){
    if(result) {
        alert("you lost");
    } else {
        alert("You win!");
    }
}

function Start(){
	window.location.reload();
}