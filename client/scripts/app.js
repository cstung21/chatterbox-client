// YOUR CODE HERE:
var app = {
  friends: [],
  username: 'anonymous',
  server: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages'
};

app.init = function() {
  app.username = window.location.search.slice(10)
  $('.submit').on('click', this.handleSubmit);
 
  $('.clear').on('click', this.clearMessages);

  // $('.fetch').on('click', this.fetch);

  this.fetch();

  $('a').on('click', this.handleUsernameClick);
};

//App Behavior


app.send = function(message) {
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
      console.log(data)
      console.dir(data)
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
  console.log('clearing');
};
app.escape = function(input) {
  input.replace()
};
app.renderMessage = function(input) {
  console.log(input[0].results);
  // console.log(input.results)
  
  for (var i = 0; i < input[0].results.length; i++) {
    $('#chats').append('<a href="#"><span class="username">' + input[0].results[i].username + '</span></a>');
    $('#chats').append('<div class="chat">' + input[0].results[i].text + '</div>');
  }
};

app.renderRoom = function(roomName) {
  $('#roomSelect').append('<div>' + JSON.stringify(roomName) + '</div>');
};

$(document).ready(function() {
  app.init();
});

//Events
app.handleUsernameClick = function() {
  //once username is click
  //push that dom element to our friends array
  console.log('i was here');
};

app.handleSubmit = function() {
  // var text = 
  var message = {
    username: 'andrew',
    text: $('.userInput').val(),
    roomname: 'gameroom'
  }
  app.send(message);
};