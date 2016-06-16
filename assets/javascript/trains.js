$( document ).ready(function() {


var clicked = 0;

//Firebase URL Listed Below
var dataRef = new Firebase("https://traintimenyc.firebaseio.com/");

console.log(clicked);


$('#panel').on('click', function() {
	console.log('Yes I Work');
	clicked++;

	dataRef.set({
		click: clicked,

	});


});













});