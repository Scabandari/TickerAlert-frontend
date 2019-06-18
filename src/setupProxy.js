const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/auth/google',
        { target: 'http://ec2-52-15-220-86.us-east-2.compute.amazonaws.com:4500/' }
    ));

    app.use(proxy('/auth/google/callback',
        { target: 'http://ec2-52-15-220-86.us-east-2.compute.amazonaws.com:4500/' }
    ));

    app.use(proxy('/tickers',
        { target: 'http://ec2-52-15-220-86.us-east-2.compute.amazonaws.com:4500/' }
    ));
};

