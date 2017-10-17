var cheerio = require("require");
var request = require("request");
var waterfall = require('async-waterfall');
var async = require("async");

var result = false;

var logger = function (level, message)
{
	level = (level || "") + "";
	message = (message || "") + "";

	console.log('{"level":"' + level.toUpperCase() + '", "site": "olympia", "message": "' + message + '"}');
};

function connectWebsite(cb)
{
  var headers = {
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'fr-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'Referer': 'https://intra.epitech.eu/',
      'Connection': 'keep-alive',
      'Cache-Control': 'max-age=0',
      'Cookie': 'user=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbiI6ImdyZWdvaXJlLm1vcnRhdWRAZXBpdGVjaC5ldSIsInR6IjpudWxsLCJleHAiOjE1MDg4NjI0NTl9.jBhIW1JLfLs4QqfA-vSjfFoqp7afKHX9SJ5YgZ69CFw; _ga=GA1.3.1567666343.1508257462; _gid=GA1.3.741569269.1508257462'
  };

  var options = {
      url: 'https://intra.epitech.eu/',
      headers: headers
  };
  function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(body);
          cb();
          return ;
      }
      else
      {
        logger("Error", "Error loading page");
        return ;
      }
  }

  request(options, callback);

}

function startCrawl(link, cb)
{
  waterfall([
  function(callback){
    callback(null, 'one', 'two');
  },
  function(arg1, arg2, callback){
    callback(null, 'three');
  },
  function(arg1, callback){
    // arg1 now equals 'three'
    callback(null, 'done');
  }
  ], function (err, result) {
    logger("info", "Crawler Done");
    cb();
    return ;
  });
}
