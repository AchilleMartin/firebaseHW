$( document ).ready(function() {

// Global Variables

	var timeHour = moment().format('H');
	var timeMin = moment().format('m');

	
	var ftHour = moment(frequencyInput, "HH:mm").format('H');
	var ftMin = moment(frequencyInput, "HH:mm").format('m');

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
		var nextArrival = frequencyInput;
		var minAway = ftMoment - timeMoment;
	};

console.log(timeHour);



});