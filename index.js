const express = require('express')
const cors = require('cors');
const app = express()
// process.env.PORT to ignore 5000 any duplicate issue
const port = process.env.PORT || 5000
// for middle wire issue fixe
app.use(cors());


const users = [
    {
        id: 01, name: 'anik', email: 'anik@gamil.com'
    },
    {
        id: 02, name: 'kanak', email: 'kanak@gamil.com'
    },
    {
        id: 03, name: 'shefali', email: 'shefali@gamil.com'
    }
]




app.get('/', (req, res) => {
    res.send('server site running successfully')
})

app.listen(port, () => {
    console.log(`Check listening on port ${port}`)
})
app.get('/users', (req, res) => {
    if (req.query.name) {
        // filter users by query [name]
        const search = req.query.name;
        const filtered = users.filter(user => user.name.toLowerCase().includes(search));
        // send data after query filter
        res.send(filtered);
    }
    else
        res.send(users);
    console.log(req.query);
})

app.use(express.json());
/* app.post('/users', (req, res) => {
    console.log('Post Api called');
    // check post send body information
    console.log(req.body);
    // new user from post send data
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    // res.send to response send as output
    res.send(user);
}) */


//////////////////////mongodb////////////////////

/* 
username: admin
password: xxppepLSmwrMGUaa

*/
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:xxppepLSmwrMGUaa@cluster0.7wt8nwb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
/* client.connect(err => {
    const collection = client.db("DatabaseName").collection("CollectionDataName");
    // perform actions on the collection object
    client.close();
    console.log('database connected');
}); */

async function run() {
    try {
        const userCollection = client.db('Simpledb').collection('users');
        const user = { name: 'kumar nath', email: 'kumar@gmail.com' };
        // const result = await userCollection.insertOne(user);
        // console.log(result);
        app.post('/users', async (req, res) => {
            const user = req.body;
            // user.id = users.length + 1;
            // users.push(user);
            const result = await userCollection.insertOne(user);
            console.log(result);
            user.id = result.insertedId;
            res.send(user);
        })

    }
    finally {

    }
}

run().catch(error => console.log(e));
////////////////////////mongodb/////////////////////////