$(document). ready(function() {
	//apend new element
	for (i = 0; i <60; i++) { // increased # of boxes from '< 100' to '< 1000' 
		$("body").append( "<div class='element' style= 'background-color: hsl (" + i * 3.6 + ", 100%, 50%);'></div>"// hue(0-360), saturation, lightness ></div>"
			);
			console.log("element " + i + "added");// used to see the loop executed in 'console' 
	}

	//mouse interaction
	$('.element').mouseover(function(){
		$(this).css('background-color','FF6B53');
	});
	 $('.element').mouseout(function(){
		$(this).css('background-color','00B3F0');
	});
});