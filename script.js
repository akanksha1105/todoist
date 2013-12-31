
$(document).ready(function() {
   $("#submitButton").on('click', function() {
     createTaskFromBox();
  
   });

   $("#newTask").on('keypress', function(e) {
    if (e.which == 13) { 
     createTaskFromBox();
    }
   });


   function createTaskFromBox() {
     var value = $('#newTask').val();
     var task = $('<li class="chkbx"><input type="checkbox">' +value +'</<li>');
     $('#tasks ul').append(task);
     task.css({"margin-left": 40}).animate({"margin-left":"0px"}, "fast");
     $('#newTask').val("");
   }  


  

   $('#tasks :checkbox').click(function() {
     var $this = $(this);
     // $this will contain a reference to the checkbox   
     if ($this.is(':checked')) {
       alert("checked");
     } else {
       // the checkbox was unchecked
     }
   });

});
