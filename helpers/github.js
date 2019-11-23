const request = require('request');
const config = require('../config.js');

let getReposByUsername = (term, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  // https://api.github.com/search/repositories?q=user:jeckacodes
  let options = {
    url: `https://api.github.com/search/repositories?q=user:${term}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  };
  request(options, callback);

}

module.exports.getReposByUsername = getReposByUsername;