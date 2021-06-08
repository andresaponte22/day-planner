// Global vars
let dateTime, date

// HTML element selectors
var saveBtn = $(".saveBtn")

// updateDate var to show current time with moment.js
var updateDate = function() {
  date = moment()
  dateAndTime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'))
}

$(document).ready(function() {
  dateAndTime = $('#currentDay')
  updateDate()
  setInterval(updateDate, 1000)
})

// loop for the middle column comparing it to the currentTime var, change color classes
function colourTimeSlot() {
  var currentHour = moment().hours()
  console.log(currentHour)
  $(".timeSlot").each(function() {
    var hour = parseInt($(this).attr("id"))
    if (hour > currentHour) {
      $(this).addClass("future")
    } else if (hour === currentHour ){
      $(this).addClass("present")
    } else {
      $(this).addClass("past")
    }
  })
}

function saveTask() {
  $(".timeSlot").each(function () {
    var task = localStorage.getItem($(this).attr("id"))
  })
}

colourTimeSlot()