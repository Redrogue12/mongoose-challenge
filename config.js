exports.DATABASE_URL = "mongodb://Red:XAvier12@ds139342.mlab.com:39342/blog-challenge" || 
                      process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       'mongodb://localhost/restaurants-app';
exports.PORT = process.env.PORT || 8080;
