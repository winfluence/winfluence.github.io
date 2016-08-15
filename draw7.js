/*//////////////////////////////////////////////////////////////////////////*/
//DATA side of DATA-DATA chord
/*//////////////////////////////////////////////////////////////////////////*/
function Draw7(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);	
	
	/*DATA and DATA text*/
	changeTopText(newText = "",
		loc = 4, delayDisappear = 0, delayAppear = 1);
	changeTopText(newText = "",
		loc = 4, delayDisappear = 9, delayAppear = 10, finalText = true);
		
	/*Stop the color changing on the DATA side*/
	d3.selectAll(".DATAToDATAArc")
		.transition().duration(700)
		.attr("fill", colors[5])
		.style("stroke", colors[5]);

	/*Repeatedly let an arc change colour*/		
	repeat();
	function repeat() {
		d3.selectAll(".DATAToDATAArc")
			.transition().duration(700)
			.attr("fill", "#99D2E9")
			.style('stroke', "#99D2E9")
			.transition().duration(700)
			.attr("fill", colors[4])
			.style("stroke", colors[4])
			.each("end", repeat)
			;
	};
				
};/*Draw7*/