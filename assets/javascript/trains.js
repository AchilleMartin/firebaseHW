$( document ).ready(function() {


var clicked = 0;

//Firebase URL Listed Below
var dataRef = new Firebase("https://traintimenyc.firebaseio.com/");

console.log(clicked);


	$('#addTrainBtn').on('click', function() {

		var train = $('#trainNameInput').val();
		var destination = $('#destinationInput').val();
		var time = $('#timeInput').val();
		var frequency = $('#frequencyInput').val();

		console.log('Yes I Work');
		clicked++;

		dataRef.push({

			train: train,
			destination: destination,
			time: time,
			frequency: frequency

		});

		return false;

// End of Click Function

	});

		dataRef.on("value", function(snapshot) {

			}, function (errorObject) {
					console.log('The read failed' + errorObject.code);

		}); 

// End of Javascript

});