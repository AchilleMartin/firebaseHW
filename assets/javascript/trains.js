$( document ).ready(function() {

var train = '';
var destination = '';
var time = '';
var frequency = '';

//Firebase URL Listed Below
var dataRef = new Firebase("https://traintimenyc.firebaseio.com/");

	$('#addTrainBtn').on('click', function() {
	  train = $('#trainNameInput').val();
		destination = $('#destinationInput').val();
		time = $('#timeInput').val();
		frequency = $('#frequencyInput').val();

		dataRef.push({

			train: train,
			destination: destination,
			time: time,
			frequency: frequency

		});

		return false;

// End of Click Function

	});

		dataRef.on("child_added", function(snapshot) {

		// Logs all of the user-input data
		console.log(snapshot.val().train + " = train");
		console.log(snapshot.val().destination + " = destination");
		console.log(snapshot.val().time + " = time");
		console.log(snapshot.val().frequency +" = frequency");

		//
		// var train = $('td').append(snapshot.val().train + "train");
		// var destination = $('td').append(snapshot.val().destination + "destination");
		// var time = $('td').append(snapshot.val().time + "time");
		// var frequency = $('td').append(snapshot.val().frequency + "frequency");


		var trainSubmit = [snapshot.val().train, snapshot.val().destination, snapshot.val().time, snapshot.val().frequency];

		// Creating a row when userinput is submitted
		var row = $('<tr>')

		// For loop to go through all of the values for userInput

		for (var i = 0; i < trainSubmit.length; i++) {

				// Creating variable to make new data cell for table
				var	datacell = $('<td>')

				// Pushes Aaray to the datacell
				datacell.html(trainSubmit[i]);

				//Creating an id to use later if necessary
				datacell.attr('id', i);

				//Pushing the datacell to the row
				row.append(datacell);

		}

		//Appends row to the table id div

		$('#userInput').append(row);


		return false;

			}, function (errorObject) {
					console.log('The read failed' + errorObject.code);

		}); 

// End of Javascript

});