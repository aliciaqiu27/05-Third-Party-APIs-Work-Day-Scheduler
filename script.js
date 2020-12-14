
    // on load (.ready()), load from local storage
    // $(document).ready(function(){
    // $(".saveBtn").click(function(){   

    //     console.log(this);

    // )};
    // });

//     $(".saveBtn").on("click", function () {
//         Event.preventDefault();
  
//   // create user object from submission
//   var user = {
//     firstName: firstNameInput.value.trim(),
//     lastName: lastNameInput.value.trim(),
//     email: emailInput.value.trim(),
//     password: passwordInput.value.trim()
//   };
//     });
  
    
    //Set current time top at the top of the page
    var currentDate = luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' });;
    console.log(currentDate);
    $("#currentDay").text(currentDate);
    var currentTimeId = luxon.DateTime.local().get('hour');
    console.log(parseInt(currentTimeId));

    //select html with jQuery to change values of the text with if/else statements. Selects all time-blocks class. Use ".each" for call back 
    // function. if the current hour>current hour, then it's future. 

    // timeblocks.each()

        $(".time-block").each(function(){
            var CurrentTimeValueZero = JSON.stringify(this.id)
            var CurrentTimeValue = JSON.parse(CurrentTimeValueZero)
            console.log(CurrentTimeValue);
        
        if (CurrentTimeValue < currentTimeId){
            $(".col-10").addClass("past");
        }
        if (CurrentTimeValue = currentTimeId){
            $(".col-10").addClass("past");
        }
        if (CurrentTimeValue > currentTimeId){
            $(".col-10").addClass("past");
        }
        });

    // $(".time-block").each(function(index) {
    //     console.log(index + ":" + $("#").val());
    // });

        // set a variable for the hour of the block (that block's id)
        // if (blockHour < now)
            // add class past
        // if blockHour ()


    // $(".saveBtn").on("click", function () {

    //     // Inside the on-click event...

    //     console.log(this);

    // )};

