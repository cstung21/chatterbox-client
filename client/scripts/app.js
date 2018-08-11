// YOUR CODE HERE:
var app = {};

app.init = function(){
};

//App Behavior

app.send = function(message){
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.fetch = function() {
  $.ajax({
    type: 'GET'
  });
};

//ChatRoom Behavior

app.clearMessages = function() {
  $('#chats').empty();
};

app.renderMessage = function(input) {
  $('#chats').append('<div>'+input+'</div>');
};

app.renderRoom = function(roomName) {
  $('#roomSelect').append('<div>'+roomName+'</div>');
};

//Events
