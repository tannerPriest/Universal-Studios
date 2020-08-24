const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()

const pool = require("./db");

pool.connect().then(console.log("DB connected!")).catch(err => console.log("DB not connected!", err))

app.use(cors());
app.use(express.json());

app.post("/user_signup", async (req, res) => {
    try {
        const { username, email, fname, lname } = req.body;
        const query = {
            text: 'INSERT INTO users(username, email, fname, lname) VALUES($1, $2, $3, $4) RETURNING *',
            values: [username, email, fname, lname],
        }
        const newUser = await pool.query(query);
        res.json({
            message: "New User Created successfully",
            newUser: newUser.rows[0]
        })
    } catch (error) {
        console.log("error occured")
        console.log(error.message);
    };
});

app.get("/user_signup", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json({
            message: "All avaliable Users",
            allUsers: allUsers.rows
        });
    } catch (error) {
        console.log("ERROR AT SIGN UP GET", error);
    }
})

app.listen(5000, () => {
    console.log("server running");
});