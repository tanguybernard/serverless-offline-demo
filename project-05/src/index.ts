import './moduleAliasDefined';

import serverless from 'serverless-http';
import bodyParser from 'body-parser';
import express from "express";
import {InMemoryUserRepository} from "@infrastructure/in-memory-user-repository";
import {User} from "@domain/user";
const app = express()


const userRepository = new InMemoryUserRepository();


app.use(bodyParser.json({ strict: false }));

app.get('/', function (req, res) {
    //console.log("ICI")
    res.send('Hello World!')
})

// Get User endpoint
app.get('/users/:userId', function (req, res) {

        const userId = req.params.userId
        const result = userRepository.getUserBy(userId);


        if (result) {
            res.json({ userId: result.userId, name: result.name });
        } else {
            res.status(404).json({ error: "User not found" });
        }

})

// Create User endpoint
app.post('/users', function (req, res) {
    const { userId, name } = req.body;
    if (typeof userId !== 'string') {
        res.status(400).json({ error: '"userId" must be a string' });
    } else if (typeof name !== 'string') {
        res.status(400).json({ error: '"name" must be a string' });
    }

    userRepository.save(new User(userId, name));

    res.json({ userId, name });

})

module.exports.handler = serverless(app);