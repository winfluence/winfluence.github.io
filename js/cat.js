

var response;
var submitted = false;
var objects = [];
brands = ["H&M","Forever 21", "Uniqlo", "Gap", "Ralph Lauren", "Gucci", "Victoria Secret", "Nike", "Converse", "Sephora", "Mac", "Urban Outfitters", "Maybelline"];

coolfacts = ["Did you know that the biggest garment-producer in Bangladesh(where H&M makes their clothes)in April 2013 suffered a factory collapse that killed 1,100 people and injured 2,500  Rana. While it  drew attention in the media, it did not change  the devastating conditions of clothes manufacturing in the country.",
 "Forever 21 came under fire in 2012 for its “sweatshop-like conditions” and has a history of refusing to hand over documentation of its labor practices.", 
 "In 2011, the book The Glory and Disgrace of UNIQLO was published, condemning the company’s “extremely harsh, slave-like labor conditions.”",
 "Gap was accused by The Institute for Global Labor and Human Rights for using a Bangladeshi sweatshop where workers regularly must work 100 hours per week for less than 25 cents per hour.", 
 " In 2014 Activists are rallied against Ralph Lauren for its staunch refusal to sign an international agreement that seeks to improve conditions for factory workers in Bangladesh, one of the world’s biggest clothing suppliers.", 
 "Very few people are aware of how the exploitation of Chinese female factory workers and luxury handbags, like Gucci, are related. Almost no one would believe that a female Chinese worker, Shuiyin Peng, who once helped put together luxury leather handbags, killed herself because of the harsh working conditions she labored under everyday",
 "Victoria Secret Workers who fall behind on their production goals, or who make even a minor error, can be slapped and beaten. Despite being forced to work five or more overtime hours a day, the workers are routinely shortchanged on their legal overtime pay, being cheated of up to $18.48 each week in wages due them. While this might not seem like a great deal of money, to these poor workers it is the equivalent of losing three regular day's' wages each week.", 
 "A former Nike factory worker Supalai accounted publicly  how she and her coworkers grew increasingly impatient over the abuses they faced at Eagle Speed. These abuses included harsh time constraints — some days they were forced to “take turns to go home for a shower” — which were brought on by the rigid deadlines set on the products by Nike.Supalai said because the workers could not produce all of the products by the set deadline, Nike put a fine on the factory, which in turn barred the factory from paying the workers.", 
 "Women making Converse sneakers at the Pou Chen Group factory in Sukabumi have been kicked, slapped and taunted by their supervisors, reveals the Associated Press, July 13 2011, Indonesia.“They growl and slap us when they get angry,” a 23-year-old worker told AP journalists “it’s part of our daily bread”.Workers who spoke with the Associated Press requested that their identities remain undisclosed for fear of reprisals. “Our only choice is to stay and suffer, or speak out and be fired,” one woman explained.",
 "The Sephora makeup brand itself is NOT cruelty-free. Sephora doesn’t test on animals except when required by law, and their products are being sold in China, where animal testing is required by law.",
 "Mac’s website claims that even though they don’t test on animals ourselves,  because of requirements by law, our products or ingredients can be tested on animals in places like China.",
 "1:The U.S. Department of Labor said it found widespread “sweatshop-like” labor violations in downtown LA’s fashion district, resulting in the recovery of more than $326,200 in back wages for 185 employees. On average, workers were being paid less than $6.50 per hour, well below the California minimum wage of $8 per hour and the federal minimum wage of $7.25 per hour, according to the Labor Department. None of the employees received the overtime rate for overtime hours worked. Investigators also found that contractors were falsifying time cards and under-reporting or failing to maintain accurate records of employees’ hours.",
 "Maybelline is not a cruelty-free brand and Maybelline products/ingredients are tested on animals. On Maybelline's website, it states that Maybelline is a brand of L'Oreal and it gets confusing because it goes onto stating L'Oreal's animal testing policy, not Maybelline's"];
picture = ["<img src=\"https://upload.wikimedia.org/wikipedia/commons/0/0c/Dhaka_Savar_Building_Collapse.jpg\" />",
"<img src=\"http://s3.amazonaws.com/corpwatch.org/img/original/forever21protest.jpg\" />",
"<img src=\"http://i.huffpost.com/gen/1564268/images/o-UNIQLO-FLAGSHIP-facebook.jpg\" />",
"<img src=\"http://www.ecouterre.com/wp-content/uploads/2013/07/gap-walmart-protest-4-537x402.jpg\" />",
"<img src=\"http://www.iccr.org/sites/default/files/styles/240_display/public/David%20Schilling%20Nazma%20Akter%20and%20edit.jpg?itok=DjhM-cdq\" />",
"<img src=\"http://us.media.fashionmag.com/m/1b45/a897/d5f0/a41b/955c/0bb3/3587/b535/33bf/48cb/48cb.jpg\" />",
"<img src=\"http://storage.parisstaronline.com/v1/dynamic_resize/sws_path/suns-prod-images/1337552302422_ORIGINAL.jpg?quality=80&size=650x&stmp=1337720204164\" />",
"<img src=\"http://fashion.lilithezine.com/images/Nike-Sweatshops-05.jpg\" />",
"<img src=\"http://www.popdiatry.com/wp-content/uploads/2014/04/AttachingEyeletsToAllStars.png\"/>",
"<img src=\"http://i39.tinypic.com/2cfcihd.jpg\" />",
"<img src=\"https://pbs.twimg.com/media/CMy0j3KVAAALX51.jpg\" />",
"<img src=\"http://www.takepart.com/sites/default/files/LAsweatshop-promo.jpg\" />",
"<img src=\"https://d22r54gnmuhwmk.cloudfront.net/photos/6/ma/sg/EWmaSGtsoUyFENf-800x450-noPad.jpg?1433194572\" />"];
for(i = 0;i< brands.length;i++) {
	objects.push({
		"brand": brands[i],
		"coolfact": coolfacts[i],
		"picture": picture[i]
	});
}

function buttonClicked() {
	
	response = $('input[name=brand]').val();
	coolfactandpicture = checkDict();
	picture = coolfactandpicture.picture;
	coolfact = coolfactandpicture.coolfact;
	string = picture + "<div>"+coolfact+"</div>";
	
	$('.answer').html(string);
}

function checkDict() {
	foundBrand = false;
	j = 0;
	for(i = 0; i < objects.length; i++) {
		if(objects[i].brand == response) {
			foundBrand = true;
			break;
		}
		j++;
	}
	if(foundBrand)
		return objects[j];
	
	return "Not Found";
}

