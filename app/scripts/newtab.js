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
});

$(function(){
  Trello.setKey('145ab72d8820e386341eda162214b61a');
  var tokenHashRegEx = /token/;

  if(localStorage.trello_token || tokenHashRegEx.test(window.location.hash)) {
    Trello.authorize({
        name: "Trello Helper Extension",
        type: "redirect",
        expiration: "never",
        interactive: true,
        scope: {read: true, write: false},
        success: function () {
        },
        error: function () {
            alert("Failed to authorize with Trello. Please tell me about your problem at khoroshiltsev.vadim@gmail.com.")
        }
    });
  } else {
    var dialog = document.getElementById('needAuthorization');
    dialog.showModal();
    $('body').addClass('opened-dialog');
    document.getElementById('authorize').addEventListener('click', function(){
      Trello.authorize({
          name: "Trello Helper Extension",
          type: "redirect",
          expiration: "never",
          interactive: true,
          scope: {read: true, write: false},
          success: function () {
          },
          error: function () {
              alert("Failed to authorize with Trello. Please tell me about your problem at khoroshiltsev.vadim@gmail.com.")
          }
      });
    });
  }

})
