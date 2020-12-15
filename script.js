   // $(".saveBtn").on("click", function(event) {

   //    // Preventing the submit button from trying to submit the form
   //    event.preventDefault();
   //    let whatToDo = $(this).siblings("textarea").val();
   //       console.log(whatToDo);
   //    let whatToDoHour = $(this).attr("id");
   //       console.log(whatToDoHour);

   //    var user = localStorage.setItem(whatToDoHour,whatToDo);
   //    console.log(user);

   //    // get most recent submission
   //    $("#14").text(window.localStorage.getItem("14"));
   //    $("#15").text(window.localStorage.getItem("15"));

   //    // let myStorage = window.localStorage
   //    // console.log(savedSchedule);
   // });
   $('.saveBtn').on('click', saveToLocalStorage);

      function saveToLocalStorage() {
        $('textarea').each(function () {
            var whatToDo = $(this).val();
            var whatToDoHour = $(this).attr("id");
            localStorage.setItem(whatToDoHour, whatToDo);
        });
      };
    
      $('#9').text(window.localStorage.getItem('9'));
      $('#10').text(window.localStorage.getItem('10'));
      $('#11').text(window.localStorage.getItem('11'));
      $('#12').text(window.localStorage.getItem('12'));
      $('#13').text(window.localStorage.getItem('13'));
      $('#14').text(window.localStorage.getItem('14'));
      $('#15').text(window.localStorage.getItem('15'));
      $('#16').text(window.localStorage.getItem('16'));
      $('#14').text(window.localStorage.getItem('17'));
      $('#9').text(window.localStorage.getItem('9'));

      // Set current time top at the top of the page
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