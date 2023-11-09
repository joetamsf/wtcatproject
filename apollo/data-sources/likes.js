const { MongoDataSource } = require('apollo-datasource-mongodb');

class LikesCount extends MongoDataSource {
    constructor(uri) {
        super()
        this.baseURL = uri;
    }
    getAllLike() {
        return this.find();
    }
}

module.exports.LikesCount = LikesCount;