/*//////////////////////////////////////////////////////////////////////////*/
// DATA net gain from DATA
/*//////////////////////////////////////////////////////////////////////////*/
function Draw8(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);	
	
	/*DATA and DATA text*/
	changeTopText(newText = "",
		loc = 5, delayDisappear = 0, delayAppear = 1);
	changeTopText(newText = "",
		loc = 5, delayDisappear = 9, delayAppear = 10, finalText = true);
		
	/*Stop the colour changing on the DATA side*/
	d3.selectAll(".DATAToDATAArc")
		.transition().duration(700)
		.attr("fill", colors[4])
		.style("stroke", colors[4]);
				
};/*Draw8*/