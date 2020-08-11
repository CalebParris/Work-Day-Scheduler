// This section declares the current day and time as well as the array for the time slots
var currentDay = moment().format("dddd, MMMM Do");
var currentHour = moment().startOf("hour").format("HH:mm");
var timeArray = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

// This adds the current day text to the header
$("#currentDay").text(currentDay);

// This function is for creating the forms equal to the amount of time slots in the time array
function timeBlock(){
    for (var i = 0; i < timeArray.length; i++){
        var newForm = $("<form class='row'>");
        var newLabel = $("<label for=textarea class='hour'>");
        var newTextArea = $("<textarea type=text name=textarea>");
        var newSaveButton = $("<button type=submit class='saveBtn'>");
        newForm.addClass("time-block");
        newLabel.text(timeArray[i]);
        newTextArea.attr("data-index", i);
        newSaveButton.addClass("far fa-save");
        newForm.append(newLabel, newTextArea, newSaveButton);

        // This if statement is to determine if the timeblock is equal to or before/after the current time
        if (timeArray[i] === currentHour){
            newTextArea.addClass("present");
        } else if (timeArray[i] >= currentHour){
            newTextArea.addClass("future");
        } else {
            newTextArea.addClass("past");
        }

        $(".container").append(newForm);
    }
}

// This calls the previous function when the page loads so that the time block render correctly
timeBlock();

// This makes the save button function and store the time and text area information in the local storage
$(".saveBtn").on("click", function(event){
    event.preventDefault();
    var key = $(this).siblings(".hour").text();
    var value = $(this).prev().val();
    localStorage.setItem(key, value);
});

// This function pulls the value information form the local storage and places it in the textarea
function displayStorage(){
    for (var i = 0; i < timeArray.length; i++){
        var savedInfo = localStorage.getItem(timeArray[i]);
        if (timeArray[i]){
            $("textarea[data-index='" + i + "']").text(savedInfo);
        }
    }

}

// This calls the previous function when the page loads so that the local storage information will still be there after a refresh
displayStorage();