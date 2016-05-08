'use strict';

$(function(){

  $.ajax({
      url: 'http://image-a-day.herokuapp.com/image',
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: function(data) {
        document.getElementById("bg").style.backgroundImage = 'url(' + data.imageUrl + ')';
      },
      error: function() {
        document.getElementById("bg").style.backgroundImage = 'url(../images/background.jpg)';
      }
  });

  $("#test").on("click", function(){
    Trello.setKey('145ab72d8820e386341eda162214b61a');
    Trello.authorize({
        name: "Trello Helper Extension",
        type: "redirect",
        expiration: "never",
        interactive: true,
        scope: {read: true, write: false},
        success: function () {
            // Can't do nothing, we've left the page
        },
        error: function () {
            alert("Failed to authorize with Trello. Please tell me about your problem at bruno@skvorc.me.")
        }
    });
  });
});
