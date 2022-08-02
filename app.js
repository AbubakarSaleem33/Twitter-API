const express = require('express');
const Twitter = require('twitter');
const app = express();
const dotenv = require('dotenv/config')

const apikey = process.env.apikey
const apikeysecret = process.env.apikeysecret
const accesstoken = process.env.accesstoken
const accesstokensecret = process.env.accesstokensecret




var client = new Twitter({
  consumer_key: apikey,
  consumer_secret: apikeysecret,
  access_token_key: accesstoken,
  access_token_secret: accesstokensecret
  });
var params = {screen_name: 'Abubakar4017', count: 5};
client.get('/statuses/mentions_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });
 

  app.listen(3000);