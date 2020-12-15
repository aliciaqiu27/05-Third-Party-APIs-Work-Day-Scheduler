     
      //User clicks on save button
      $('.saveBtn').on('click', saveToLocalStorage);

      function saveToLocalStorage() {
        $('textarea').each(function () {
            var whatToDo = $(this).val();
            var whatToDoHour = $(this).attr("id");
            localStorage.setItem(whatToDoHour, whatToDo);
        });
      };
      
      //grabs value from local storage when User refreshes the page
      $('#nine').text(window.localStorage.getItem('nine'));
      $('#ten').text(window.localStorage.getItem('ten'));
      $('#eleven').text(window.localStorage.getItem('eleven'));
      $('#twelve').text(window.localStorage.getItem('twelve'));
      $('#thirteen').text(window.localStorage.getItem('thirteen'));
      $('#fourteen').text(window.localStorage.getItem('fourteen'));
      $('#fifteen').text(window.localStorage.getItem('fifteen'));
      $('#sixteen').text(window.localStorage.getItem('sixteen'));
      $('#seventeen').text(window.localStorage.getItem('seventeen'));

      // Sets current time top at the top of the page
      var currentDate = luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' });;
         console.log(currentDate);
         $("#currentDay").text(currentDate);
      var currentTimeId = luxon.DateTime.local().get('hour');


      // time-block.each()
      $(".time-block").each(function(){
         var timeBlockHour = this.id;
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