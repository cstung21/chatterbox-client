// YOUR CODE HERE:
var app = {
  server: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages'
};

app.init = function(){
  $('.username').on('click', this.handleUsernameClick());

  $('.submit').on('click', this.handleSubmit());

  this.fetch();

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
    url: this.server,
    type: 'GET',
    data: 'order=-createdAt',
    contentType: 'application/json',
    success: function (data) {
      // console.log(data)
      app.renderMessage.call(this, arguments);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: something bad happened');
    }
  });
};

//ChatRoom Behavior

app.clearMessages = function() {
  $('#chats').empty();
};

app.renderMessage = function(input) {
  console.log(input[0].results)
  // console.log(input.results)
  for (var i = 0; i < input[0].results.length; i++) {

    $('#chats').append('<div class="chat">'+input[0].results[i].text+'</div>')
  }
};

app.renderRoom = function(roomName) {
  $('#roomSelect').append('<div>'+JSON.stringify(roomName)+'</div>');
};

$(document).ready(function(){
  app.init();
});

//Events
app.handleUsernameClick = function() {
};

app.handleSubmit = function() {
}