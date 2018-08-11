// YOUR CODE HERE:
var app = {};

app.init = function(){
  // this.fetch();
  $('.username').on('click', this.handleUsernameClick());

  $('.submit').on('click', this.handleSubmit());

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
    //url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages' || undefined,
    type: 'GET',

    //data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log(data)
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

//ChatRoom Behavior

app.clearMessages = function() {
  $('#chats').empty();
};

app.renderMessage = function(input) {
  $('#chats').append('<div>'+JSON.stringify(input)+'</div>');
};

app.renderRoom = function(roomName) {
  $('#roomSelect').append('<div>'+JSON.stringify(roomName)+'</div>');
};

$(document).ready(function(){
  app.init();
});

//Events
app.handleUsernameClick = function() {
  console.log('hi');
};

app.handleSubmit = function() {
  console.log('something');
}