const request = require('request');

module.exports = function (url) {
    request(url, (error, response, body) => { 
        if (error) throw error;
        process.stdout.write(body);
        process.stdout.write('\nprompt > ');
    });
}  