/*//////////////////////////////////////////////////////////////////////////*/
//DATA side of DATA-DATA chord
/*//////////////////////////////////////////////////////////////////////////*/
function Draw5(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	/*DATA and DATA text*/
	changeTopText(newText = "",
		loc = 5, delayDisappear = 0, delayAppear = 1, finalText = true);
	
    /*Make the non DATA & DATA arcs less visible*/
    svg.selectAll("g.group").select("path")
		.transition().duration(1000)
		.style("opacity", opacityValue);		

	/*Show only the DATA DATA part at DATA*/
	var arcSamsung = d3.svg.arc()
				.innerRadius(innerRadius)
				.outerRadius(outerRadius)
				.startAngle(4.040082626337902)
				.endAngle(4.561777856121815);
				
	svg.append("path")
		.attr("class","DATAToDATAArc")
		.attr("d", arcDATA)
		.attr("fill", colors[5])
		.style('stroke', colors[5]);
		
	repeat();
	
	/*Repeatedly let an arc change colour*/
	function repeat() {
		d3.selectAll(".DATAToDATAArc")
			.transition().duration(700)
			.attr("fill", "#9FA6D0")
			.style('stroke', "#9FA6D0")
			.transition().duration(700)
			.attr("fill", colors[5])
			.style('stroke', colors[5])
			.each("end", repeat)
			;
	};
	
};/*Draw5*/