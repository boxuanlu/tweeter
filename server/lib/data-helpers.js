"use strict";


module.exports = function makeDataHelpers(db) {
  return {
    // 1. save tweet to db
    saveTweet: function(newTweet, callback) {
      const tweets = db.collection('tweets');
      tweets.insertOne(newTweet);
      callback(null, true);
    },
    // 2. get all tweet from db and put new tweet infornt
    getTweets: function(callback) {
      db.collection("tweets").find().toArray((err, results) => {
        if (err) throw err;
        const sortNewestFirst = (a, b) => a.created_at - b.created_at;
        callback(null, results.sort(sortNewestFirst));
      });
    }

  };
};

