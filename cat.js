

var dict = []; // create an empty array
var response;
dict.push({
    key:   "Brand",
    value: "coolfact"
});
$('#myForm').on('submit',function(e) {
	e.preventDefault();
	response = $('input[name=brand]').val();
	alert(val);
	
});