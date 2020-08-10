var currentDay = moment().format("dddd, MMMM Do");
var currentHour = moment().startOf("hour").format("HH:mm");
var timeArray = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

$("#currentDay").text(currentDay);

console.log(moment())
console.log(currentHour)

function timeBlock(){
    for (var i = 0; i < timeArray.length; i++){
        var newForm = $("<form class='row'>");
        var newLabel = $("<label for=textarea class='hour'>");
        var newTextArea = $("<textarea type=text name=textarea>");
        var newSaveButton = $("<button type=button class='saveBtn'>");
        newForm.addClass("time-block");
        newLabel.text(timeArray[i]);
        newSaveButton.addClass("far fa-save");
        newForm.append(newLabel, newTextArea, newSaveButton);

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

$(".saveBtn").on("click", function(){

    
})

timeBlock();