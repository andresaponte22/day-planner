// Global vars for the date
let date, dateAndTime

// Global HTML element selectors
var saveBtn = $(".saveBtn")

// function updateDate to get current time with moment.js
function updateDate() {
  date = moment()
  dateAndTime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'))
}

// as soon as the dom is ready update the date every second
$(document).ready(function() {
  dateAndTime = $('#currentDay')
  updateDate()
  setInterval(updateDate, 1000)
})

// function to loop for the middle column comparing it to the currentTime var, 
// change color classes
function colourTimeSlot() {
  var currentHour = moment().hours()
  $(".timeSlot").each(function() {
    var hour = parseInt($(this).attr("id"))
    if (hour > currentHour) {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future")
    } else if (hour === currentHour ){
      $(this).removeClass("past")
      $(this).removeClass("future")
      $(this).addClass("present")
    } else {
      $(this).removeClass("future")
      $(this).removeClass("present")
      $(this).addClass("past")
    }
  })
}

// for each element with the id timeSlot, get its local storage values 
// if available
function getTask() {
  var text = $(".timeSlot")
  text.each(function () {
    var task = localStorage.getItem($(this).attr("id"))
    if (task) {
      $(this).children(".task").val(task)
    }
  })
}

// Event listener on click for save button, it will store the values
// of the time slot and the task in local storage
saveBtn.click(function(event) {
  event.preventDefault()
  var hour = $(this).parent().attr("id")
  var task = $(this).siblings(".task").val()
  localStorage.setItem(hour, task)
})

/////////
colourTimeSlot()
getTask()