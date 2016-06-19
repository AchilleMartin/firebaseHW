$( document ).ready(function() {

var train = '';
var destination = '';
var firstTrain = '';
var frequency = '';

//Firebase URL Listed Below
var dataRef = new Firebase("https://traintimenyc.firebaseio.com/");

//On Button Click - Will Add Train Data
	$('#addTrainBtn').on('click', function() {
	  train = $('#trainNameInput').val();
		destination = $('#destinationInput').val();
		firstTrain = $('#firstTrainInput').val();
		frequency = $('#frequencyInput').val();

	// Empties Fields After Submitting Data
		$('#trainNameInput').val('');
		$('#destinationInput').val('');
		$('#firstTrainInput').val('');
		$('#frequencyInput').val('');

		dataRef.push({

			train: train,
			destination: destination,
			firstTrain: firstTrain,
			frequency: frequency

		});

		return false;


// End of Click Function

	});

		dataRef.on("child_added", function(snapshot) {

		// Logs all of the user-input data
		// console.log(snapshot.val().train + " = train");
		// console.log(snapshot.val().destination + " = destination");
		// console.log(snapshot.val().time + " = time");
		// console.log(snapshot.val().frequency +" = frequency");

		//
		train = $('#trainNameInput').val();
		destination = $('#destinationInput').val();
		firstTrain = $('#firstTrainInput').val();
		frequency = $('#frequencyInput').val();

		var trainSubmit = [snapshot.val().train, snapshot.val().destination, snapshot.val().frequency, snapshot.val().firstTrain];

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


	var timeHour = moment().format('H');
	var timeMin = moment().format('m');
	var ftHour = moment(firstTrain, "HH:mm").format('H');
	var ftMin = moment(firstTrain, "HH:mm").format('m');

	var ftMoment = (ftHour * 60) + (ftMin * 1);
	var timeMoment = (timeHour * 60) + (timeMin * 1);

// Find how much time has passed since the first train
	var diff = timeMoment - ftMoment;

// Find how many trains have come so far
	var trainsSinceFirst = Math.floor(diff/frequency);

// Find how long until the next train comes
	var nextArrival = ((trainsSinceFirst + 1) * frequency) + ftMoment;
	
// Handle negative values for minAway and nextArrival
	if (ftMoment < timeMoment) {
		var minAway = nextArrival - timeMoment;
		var nextArrival = moment().add(minAway, 'minutes').format('HH:mm');
	} 
	else {
		var nextArrival = firstTrain;
		var minAway = ftMoment - timeMoment;
	};

		// return false;


			}, function (errorObject) {
					console.log('The read failed' + errorObject.code);

		}); 

// End of Javascript

});