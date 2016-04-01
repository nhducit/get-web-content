/**
 * Created by duc on 01/04/2016.
 */
var cheerio = require('cheerio');
var requestPromise = require('request-promise');

module.export = function getWebContent(url) {
  return requestPromise(url)
    .then(function (htmlString) {
      return cheerio.load(htmlString);
    });
};