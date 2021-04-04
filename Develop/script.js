$(document).ready(function(){

    $(".saveBtn").on("click",function(){
        var text =$(this).siblings(".description").val()
        var time =$(this).parent().attr("id")

        localStorage.setItem(time, text);
    })

    var now = moment().format("dddd, MMMM Do, YYYY, A");
    $('.lead').append(now);

    var timeChange = moment()

});