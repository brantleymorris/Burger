// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // button to update status
  // TODO - make sure this is getting called correctly
    $(".change-status").on("click", function(event) {
      var id = $(this).data("id");
      var newStatus = $(this).data("newstatus");
  
      // new status isn't needed it will just switch the burger from false to true, could add that functionality back in later
      var newDevouredStatus = {
        status: newStatus
      };
  
      // Send the PUT request to update burger status
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredStatus
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    // button to submit form for new burger, this one is working
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#bu").val().trim(),
      };
  
      // Send the POST request with new burger information
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    // button to delete burger, working
    $(".delete-burger").on("click", function() {
      let id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(
        function() {
          location.reload();
        }
      );
    })
  });
  