const { MongoClient } = require("mongodb");

// URIを正しく（最後の ß を消す）
const uri = "mongodb+srv://rako0403:Rako0403@cluster0.ba7yugg.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri);

async function run() {
  try {
    // ① まず接続
    await client.connect();

    const database = client.db("notes");
    const notes = database.collection("notes");

    // ② データを登録
    const query = [
      {
        id: 1,
        title: "ノート１のタイトルです",
        subTitle: "ノート１のサブタイトルです",
        bodyText: "ノート１の本文です"
      },
      {
        id: 2,
        title: "ノート２のタイトルです",
        subTitle: "ノート２のサブタイトルです",
        bodyText: "ノート２の本文です"
      }
    ];

    const result = await notes.insertMany(query);
    console.log(result);
  } catch (err) {
    console.error("エラー:", err);
  } finally {
    // ③ 最後にクローズ
    await client.close();
  }
}

run();
