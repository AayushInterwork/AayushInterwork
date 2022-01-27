// Connection Establishment of Mongodb
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";


const client = new MongoClient(uri);

// To List All Databases
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

// To List All Collections
async function listCollections(client) {
    collectionList = await client.db("Practice").listCollections();

    console.log("Collections:");
    collectionList.collections.forEach(col => console.log(` - ${col.name}`));
};

// To Read First Document of a Particular Collection
async function findOneResult(client) {
    const findOneResult = await client.db("Practice").collection("Employee").findOne();
    console.log(findOneResult);
}

// To Delete any Document of a Particular Collection
async function Delete(client) {
    const Delete = await client.db("Practice").collection("Employee").find({ name: "Anita" });
    console.log(Delete);

}


// To Insert Document in a Collection
async function insert(client,obj) {
    const insert = await client.db("Practice").collection("Employee").insertOne(obj)
    console.log(insert);
}

// Main Function
async function main() {

    try {
        // Connect to the MongoDB cluster
        if (await client.connect()) {
            console.log("Connection Established");
        } else {
            console.log("Connection Not Established");
        }


        // Make the appropriate DB calls
        // await  listDatabases(client);

        // Calling Read Function
        // await findOneResult(client);

        // await Delete(client);

        // await listCollections(client);

        // Inserting a Document
        await insert(client, obj = { name: "Radhika", age: 20, contact: 9977886655, Address: { City: "Faridabad", State: "Haryana" }, nickname: "Ishu", Emp_id: 2, friend: "Aayush" });

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
