// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-picked").on("click", function(event) {
      var id = $(this).data("id");
      var newMon = $(this).data("newpicked");
  
      var newMonState = {
        picked: newMon
      };
  
      // Send the PUT request.
      $.ajax("/api/pokemon/" + id, {
        type: "PUT",
        data: newMonState
      }).then(
        function() {
          console.log("Added", newMon);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newPoke = {
        pokemon_name: $("#pk").val().trim(),
        picked: $("[name=picked]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/pokemon", {
        type: "POST",
        data: newPoke
      }).then(
        function() {
          console.log("created new Pokemon");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  