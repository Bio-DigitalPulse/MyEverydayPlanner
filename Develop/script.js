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
            var workDay = parseInt($(this).attr("id").split("hour")[1]);   //Function to determine the time of day.



            if (workDay < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");   //Variance formula which alters depending on workday hour index.
                $(this).removeClass("present");
            }
            else if (workDay === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
 timedChange();
})