const express = require("express");
const router = express.Router();
const config = require("config");
const { MongoClient } = require("mongodb");

const fetchCollectionNames = async () => {
  const uri = config.get("db");
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db();
    const collections = await database.listCollections().toArray();
    const collectionNames = collections.map((collection) => collection.name);
    const filteredCollectionNames = collectionNames.filter(
      (name) => name !== "sentences"
    );

    return filteredCollectionNames;
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
};

router.get("/", async (req, res) => {
  const collectionNames = await fetchCollectionNames();
  if (!collectionNames)
    return res.status(500).send("Could not get collection names!");

  return res.status(200).send(collectionNames);
});

module.exports = router;
