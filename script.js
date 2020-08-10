var currentDay = moment().format("dddd, MMMM Do");
var currentHour = moment().startOf("hour").format("HH:mm");
var timeArray = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

$("#currentDay").text(currentDay);

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

timeBlock();

function displayStorage(){
    for (var i = 0; i < localStorage.length; i++){
        var savedInfo = localStorage.getItem(localStorage.key(i));
        console.log(savedInfo);
        $("textarea[data-index='" + i + "']").text(savedInfo)
    }

}

$(".saveBtn").on("click", function(event){
    event.preventDefault();
    var key = $(this).siblings(".hour").text();
    var value = $(this).prev().val();
    localStorage.setItem(key, value);
});

displayStorage();