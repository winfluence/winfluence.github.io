/*//////////////////////////////////////////////////////////////////////////*/
//DATA from DATA
/*//////////////////////////////////////////////////////////////////////////*/
function Draw6(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	/*DATA and DATA text*/
	changeTopText(newText ="",
		loc = 5, delayDisappear = 0, delayAppear = 1, finalText = true);

	/*Show only the DATA DATA part at DATA*/
	var arcNokia = d3.svg.arc()
				.innerRadius(innerRadius)
				.outerRadius(outerRadius)
				.startAngle(2.837816067671451)
				.endAngle(2.9104595910835127);

	svg.append("path")
		.attr("class","DATAtoDATAArc")
		.attr("d", arcNokia)
		.attr("opacity", 0)
		.attr("fill", colors[4])
		.transition().duration(700)
		.attr("opacity", 1)
		.attr("stroke", colors[4]);				
		
};/*Draw6*/