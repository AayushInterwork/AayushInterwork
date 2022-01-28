const mongoUtil = require('./temp');
var db;
mongoUtil.connectToServer(function (err, db) {
    if (err) {
        console.log(err);
    } else {
        console.log('connected to mongodb');
        db = mongoUtil.getDb();
    }
});
exports.dbs = () => {
    mongoUtil.getDb;
} 