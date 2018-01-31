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

    // 2. set up the html format;
    let tweetTemplate = [
      `<header>
        <img src=${avatars}></img>
        <h2>${name}</h2>
        <span>${handle}</span>
        </header>`,
      `<p>${content}</p>
        <footer>
        <p>X days ago</p>
        </footer>`
    ];
    // 3. by using .append method, put all data in to the html format;
    $tweet.append(tweetTemplate.join(''));
    return $tweet;
  };

  var renderTweets = function(array) {

    //4. go through the whole database and use each data case;
    for (let eachCase of array) {
      $('#tweet').append(createTweetElement(eachCase));
    }
  };

  renderTweets(data);

});
