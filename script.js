console.log(moment());

var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);