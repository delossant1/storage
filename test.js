function calculateRemainingTime() {
    var ageInput = prompt("Enter your age:");

    ageInput = parseFloat(ageInput);

    if (isNaN(ageInput)) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }

    var yearsRemaining = 90 - ageInput;
    var daysRemaining = yearsRemaining * 365;
    var weeksRemaining = yearsRemaining * 52;
    var monthsRemaining = yearsRemaining * 12;

 
    alert("In days, you have " + daysRemaining + " left. In weeks, you have " + weeksRemaining + " left. In months, you have " + monthsRemaining + " left.");
}

calculateRemainingTime();
