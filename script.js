
    $(".saveBtn").on("click", function(event) {

    // Preventing the submit button from trying to submit the form
    event.preventDefault();
    let textArea = $("textarea")
    
    // create user object from submission
    var user = {
    firstName: $('textArea').val(),
    };

    console.log(user);
  
    // set new submission
    localStorage.setItem("user", JSON.stringify(user));

    // get most recent submission
    var lastUser = JSON.parse(localStorage.getItem("user"));
    $('textarea').append(user)
    });
    


    //Set current time top at the top of the page
    var currentDate = luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' });;
    console.log(currentDate);
    $("#currentDay").text(currentDate);
    var currentTimeId = luxon.DateTime.local().get('hour');


    // time-block.each()
        $(".time-block").each(function(){
            var timeBlockHour = this.id
            console.log(timeBlockHour);
        if (timeBlockHour < currentTimeId){
           $(this).find('textarea').addClass('past');
        }
        else if (timeBlockHour > currentTimeId){
           $(this).find('textarea').addClass('future');
        }
        else {
           $(this).find('textarea').addClass('present');
        }
        });