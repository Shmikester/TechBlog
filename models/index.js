const modelComment = require('./modelComment');
const modelPost = require('./modelPost');
const modelUser = require('./modelUser');

modelUser.hasMany(modelPost);
modelPost.belongsTo(modelUser);

modelUser.hasMany(modelComment);
modelComment.belongsTo(modelUser);

modelPost.hasMany(modelComment);
modelComment.belongsTo(modelPost);

module.exports = { modelUser, modelPost, modelComment };