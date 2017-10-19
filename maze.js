window.onload=function(){
						var query = document.querySelectorAll(".boundary");		
						for(var i =0;i < query.length ; i++){
							query[i].addEventListener('mouseover',changeColour); 
							function changeColour(){
							for(let index = 0; index<query.length-1; index++){
								query[index].setAttribute("class","boundary youlose");
							 }
						}
					}
				}