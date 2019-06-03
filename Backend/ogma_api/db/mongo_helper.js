const MongoClient = require("mongodb").MongoClient;
ObjectID = require("mongodb").ObjectID;
const DB_NAME = "Ogma";
const HOST = "mongodb://localhost:27017";

class MongoHelper {
  static get(coll) {
    // To get all questions
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.find().toArray();
    });
  }

  static create(coll, payload) {
    // adding a question/topic to the database
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.insertOne(payload);
    });
  }

  static delete(coll, id) {
    // removing a question/topic from the database
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.deleteOne({ _id: ObjectID(id) });
    });
  }

  static update(coll, id, payload) {
    // Updating a question/topic using the id
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.updateOne({ _id: ObjectID(id) }, { $set: payload });
    });
  }
  // 
  // static addComment(coll, id, payload) {
  //   // Connect using the connection string
  //   return MongoClient.connect(
  //     HOST,
  //     { useNewUrlParser: true }
  //   ).then(client => {
  //     const collection = client.db(DB_NAME).collection(coll);
  //     return collection.updateOne(
  //       { _id: ObjectID(id) },
  //       { $push: { comments: payload } }
  //     );
  //   });
  // }
}

module.exports = MongoHelper;
