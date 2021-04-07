$(document).ready(function(){   //Creates document for JS functions

    $(".saveBtn").on("click",function(){
        var text =$(this).siblings(".description").val()   //Save button will grab written description. And commit the variable "time" to the parent ID attribute.
        var time =$(this).parent().attr("id")

        localStorage.setItem(time, text);   //Stores data in local storage
    })
    
    var now = moment().format("dddd, MMMM Do, YYYY, A");   //Calculates the current time for display.
    $('#currentDay').append(now);

    function storedData() {
        $(".row").each(function () {
            var textInput = $(this).attr("id");   //Retrieves the local storage data and displays within appropriate text area.
            var savedInput = localStorage.getItem(textInput);

            if (savedInput !== null) {
                $(this).children(".description").val(savedInput)
            }
        })
    }

    storedData();


    function timedChange() {

        var thisMoment = moment().hour(); 
        $(".row").each(function () {
            var scheduledMoment = parseInt($(this).attr("id").split("hour")[1]);



            if (scheduledMoment < thisMoment) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (scheduledMoment === thisMoment) {
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