$(document).ready(function(){   //Creates document for JS functions

    $(".saveBtn").on("click",function(){
        var text =$(this).siblings(".description").val()   //Save button will grab written description. And commit the variable "time" to the parent ID attribute.
        var time =$(this).parent().attr("id")

        localStorage.setItem(time, text);   //Stores data in local storage
    })
    
    var now = moment().format("dddd, MMMM Do, YYYY, A");   //Calculates the current time for display.
    $('#currentDay').append(now);

    function storedData() {
        $(".time-block").each(function () {
            var textInput = $(this).attr("id");   //Retrieves the local storage data and displays within appropriate text area.
            var savedInput = localStorage.getItem(textInput);

            if (savedInput !== null) {
                $(this).children(".description").val(savedInput)
            }
        })
    }

    storedData();


    function timedChange() {

        var currentTime = moment().hour(); 
        $(".time-block").each(function () {
            var hour = parseInt($(this).attr("id"));   //Function to determine the time of day.



            if (hour < currentTime) {
                $(this).children(".description").addClass("past");      //Variance formula which alters depending on hour hour index.

            }
            else if (hour === currentTime) {
 
                $(this).children(".description").addClass("present");

            }
            else {

                $(this).children(".description").addClass("future");
            }
        })
    }
 timedChange();
})