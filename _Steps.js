/*  
initial Setup
------------------
>go Expressjs website
>> go getting started and make folder
{
    >npm init -y
    >>npm install express
    >>>npm i cors (to give public access)
    >>>>npm i -g nodemon (for change reload perform)
    >>>>> .gitignore [node_modules] (create=> for git push ignore)
    >>>>>> index.js (create)
    {
        // functionality add
        const express = require('express')
        const cors = require('cors');
        const app = express()
        const port = process.env.PORT || 5000
        app.use(cors());
        app.get('/', (req, res) => {
            res.send('server site running successfully')
        })

        app.listen(port, () => {
            console.log(`Check listening on port ${port}`)
        })
    }
}

*/
/* 
Post:
------------------
Server Side:
> create post API
>> use express.json() as middle ware
Client Side:
> use fetch with method POST
>> add headers to the fetch: 'content-type': 'application/json'
>>> add body to the fetch to send data
>>>> Make sure to use JSON.stringify to send data
*/

/* 
Query: 
---------------------------------------
https://www.youtube.com/watch?v=CSB8DohoFfA&ab_channel=GSeriesMusic

browser Search or client side:
path?name=value&email=value
Server side:
req.query.name
req.query.email
*/

/* 
Mongodb:
----------------------------
1. sign up mongodb atlas
2. dba user
3. Whitelist your ip address
4. database> connect> show entire code
5. npm i mongodb

*/