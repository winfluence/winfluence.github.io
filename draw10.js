/*//////////////////////////////////////////////////////////////////////////*/
//Show DATA - explain DATA
/*//////////////////////////////////////////////////////////////////////////*/
function Draw10(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);
	
	changeTopText(newText = "",
		loc = 7/2, delayDisappear = 0, delayAppear = 1);
		changeTopText(newText = ""+ 
								"",
		loc = 7/2, delayDisappear = 9, delayAppear = 10, finalText = true);
		
	/*Show only the DATA arc*/
	var arcNokia = d3.svg.arc()
				.innerRadius(innerRadius)
				.outerRadius(outerRadius)
				.startAngle(2.048671976860533)
				.endAngle(2.6694216777820063);

	svg.append("path")
		.attr("class","DATAArc")
		.attr("d", arcNokia)
		.attr("opacity", 1)
		.attr("stroke", colors[4])
		.attr("fill", colors[4]);	

	/*Repeatedly let an arc change colour*/		
	repeat();
	
	function repeat() {
		d3.selectAll(",DATAArc")
			.transition().duration(700)
			.attr("fill", "#99D2E9")
			.style('stroke', "#99D2E9")
			.transition().duration(700)
			.attr("fill", colors[4])
			.style("stroke", colors[4])
			.each("end", repeat);
	};
	
	/*Show only the DATA chord*/
	chords.transition().duration(2000)
		.attr("opacity", function(d, i) { 
			if(d.source.index == 4 && d.target.index == 4) {return opacityValueBase;}
			else {return 0;}
		});		

	/*Make the other strokes less visible*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke",function(d,i,j) {if (j == 4) {return "#000";} else {return "#DBDBDB";}});
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity",function(d,i,j) {if (j == 4) {return 1;} else {return opacityValue;}});
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity", function(d) { if(d.index == 4) {return 1;} else {return opacityValue;}});

};/*Draw10*/