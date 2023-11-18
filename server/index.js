//All in backend
const express = require('express');
const app=express();
const mysql=require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host:'127.0.0.1',
    password:'12345678',
    database:'employeeSystem',
}) ;

app.post('/create', (req, res)=>{
    const name = req.body.Name
    const age = req.body.Age
    const country = req.body.Country
    const Position = req.body.Position
    const salary = req.body.Salary

    db.query('INSERT INTO employees (Name,Age,Country,Position,Salary) VALUES(?,?,?,?,?)' ,
     [name,age,country,Position,salary], 
     (err,result)=>{
        if (err){
            console.log(err)
        }else{
            res.send("Values inserted.")
        }
     });
});

app.listen(3002, () => {
    console.log("I am 3002 port");
});