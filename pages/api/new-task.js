import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const client = await MongoClient.connect('mongodb+srv://arunmalewadi:bkfxOhqwBilYQ0NK@cluster0.gtjc9ml.mongodb.net/?retryWrites=true&w=majority'
      );

      const db = client.db();

      const meetupsCollection = db.collection("todo");

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: "Todo Inserted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error inserting todo." });
    }
  }
}

export default handler;

