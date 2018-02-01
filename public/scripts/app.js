/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// data base
const data = [{
    "user": {
      "name": "Newton",
      "avatars": {
        "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


// 1. first step is to pull  the data from the database wich is given;
$().ready(function() {
  var createTweetElement = function(database) {
    let $tweet = $('<article>').addClass('tweet');
    let name = database.user.name;
    let avatars = database.user.avatars.small;
    let handle = database.user.handle;
    let content = database.content.text;
    let date = Math.floor((Date.now() - (database.created_at)) / 86400000);
    // 2. set up the html format;
    let tweetTemplate = [
      `<header>
        <img src=${avatars}></img>
        <h2>${name}</h2>
        <span>${handle}</span>
        </header>`,
      `<p>${content}</p>`,
      `<footer>
        <p>${date} days ago</p>`,
      '<i class="fa fa-flag" aria-hidden="true"></i>',
      '<i class="fa fa-retweet" aria-hidden="true"></i>',
      '<i class="fa fa-heart" aria-hidden="true"></i>',
      '</footer>'
    ];
    // 3. by using .append method, put all data in to the html format;
    $tweet.append(tweetTemplate.join(''));
    return $tweet;
  };

  function renderTweets(tweets) {
    tweets.forEach(function(data) {
      $('#tweet').prepend(createTweetElement(data));
    });
  };

  function loadRenderTweet() {
    $('#tweet').empty()
    $.ajax({
      url: '/tweets',
      method: 'GET',
    }).done(function(data) {
      console.log('Success :', data);
      renderTweets(data);
    });
  };
  loadRenderTweet();

  $('.new-tweet form').on('submit', function(e) {
    e.preventDefault();
    var data = $('.new-tweet form').serialize();


    if ($('textarea').val() === "") {
      window.alert("you need to write something in a tweet!");
    } else if ($('textarea').val().length > 140) {
      window.alert("it should be under 140!");
    } else {

      $.post('/tweets', data).done(function() {
        loadRenderTweet();
      });
      $(this).trigger('reset');
      $('.new-tweet .counter').text('140');
    }
  });

  // for compose
  $('#nav-bar button').click(function() {
    $('.new-tweet').slideToggle('fast');
    $('.new-tweet textarea').focus();
  });

});
