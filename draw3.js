/*///////////////////////////////////////////////////////////  
//Draw the other arcs as well
//////////////////////////////////////////////////////////*/
function Draw3(){

	/*First disable click event on clicker button*/
	stopClicker();

	var arcDelay = [0,1,2,12,13,23,33,34,35,40,47];
	/*Show and run the progressBar*/
	runProgressBar(time=700*(arcDelay[(arcDelay.length-1)]+1));	
		
   /*Fill in the other arcs*/
   svg.selectAll("g.group").select("path")
	.transition().delay(function(d, i) { return 700*arcDelay[i];}).duration(1000)
	.attrTween("d", function(d) {
		if(d.index != 0) {
		   var i = d3.interpolate(d.startAngle, d.endAngle);
		   return function(t) {
			   d.endAngle = i(t);
			 return arc(d);
		   }
		}
    });
 
  /*Make the other strokes black as well*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("g").selectAll("line").style("stroke", "#000");
  /*Same for the %'s*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("g").selectAll("text").style("opacity", 1);
  /*And the Names of each Arc*/	
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("text").style("opacity", 1);

	/*Change the text of the top section inside the circle accordingly*/
	/*DATA*/
	changeTopText(newText = "The suspected number of cases in 2011 was a higher 351,839 and a lower death of 2,918.",
		loc = 6/2, delayDisappear = 0, delayAppear = arcDelay[2]);
	/*DATA*/
	changeTopText(newText = "The last numbers of reported cases in 2013 is 58,574 with a total death of 581.",
		loc = 6/2, delayDisappear = arcDelay[3], delayAppear = arcDelay[4]);
	/*DATA*/
	changeTopText(newText = "In total the last reported numbers of 2015 cases are 11,721 with a reported of 113 total deaths.",
		loc = 3/2, delayDisappear = (arcDelay[5]-1), delayAppear = arcDelay[5]);
	/*DATA*/
	changeTopText(newText = "The UN Haiti has reported the closer approaching of April the beginning of massive showers increases the risk and an increase in numbers.",
		loc = 4/2, delayDisappear = arcDelay[6], delayAppear = (arcDelay[8]-1));		
	/*100%*/
	changeTopText(newText = "Together this shows the statistics of haiti cholera cases.",
		loc = 1/2, delayDisappear = (arcDelay[9]-1), delayAppear = arcDelay[9]);		
	/*DATA*/
	changeTopText(newText = "",
		loc = 8/2, delayDisappear = (arcDelay[10]-1), delayAppear = arcDelay[10], finalText = true);					
	
	/*Change the text of the bottom section inside the circle accordingly*/
	/*DATA*/
	changeBottomText(newText = "In 2012  the reported cases where 101,503. There has been a gradual decrease in this data with a low of 908 deaths.",
		loc = -2/2, delayDisappear = 0, delayAppear = arcDelay[2]);
	/*DATA*/
	changeBottomText(newText = "The 2014 reported cases number is 27,388 with a low of 297 deaths. ",
		loc = -1/2, delayDisappear = arcDelay[3], delayAppear = arcDelay[4]);	
	/*Other*/
	changeBottomText(newText = "",
		loc = -1/2, delayDisappear = (arcDelay[5]-1), delayAppear = (arcDelay[8]-1));	
	/*Chord intro*/
	changeBottomText(newText = "",
		loc = 1/2, delayDisappear = (arcDelay[9]-1), delayAppear = arcDelay[10]);	

};/*Draw3*/