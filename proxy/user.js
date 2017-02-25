var models = require('../mysql_models');
var User = models.User;

exports.getUserById = function(id, callback) {
    if (!id) {
        return callback();
    }
    User.findOne({ id: id }, callback);
};

exports.updatePwd = function(data, callback) {

    User.updatePwd(data, callback);
}

exports.newAndSave = function(Data, callback) {
    User.count({}, function(err, count) {
        var user = new User();
        user.id = 10000 + parseInt(count);
        user.name = Data.username;
        user.password = Data.password;
        user.level = 0;
        user.money = 0;
        user.experience = 0;
        user.save(callback);
    });
};

exports.getUserByName = function(name, callback) {
    /*if(!name){
        return callback(1, null);
    }*/
    User.findOne({ 'name': name }, callback);
}
