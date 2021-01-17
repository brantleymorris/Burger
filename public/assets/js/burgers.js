// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-status").on("click", function(event) {
      var id = $(this).data("id");
      var newStatus = $(this).data("newstatus");
  
      var newDevouredStatus = {
        status: newStatus
      };
  
      // Send the PUT request.
      $.ajax("/api/burgerss/" + id, {
        type: "PUT",
        data: newDevouredStatus
      }).then(
        function() {
          console.log("changed status to", newStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#bu").val().trim(),
        status: $("[name=status]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgerss", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function() {
      let id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    })
  });
  