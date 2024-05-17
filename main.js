const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require("./models/Employee")


mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');

const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno];
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})
app.get('/generate', async (req, res) => {
    //clear the collection
    await Employee.deleteMany({})
    //generate random data
    let randomnames = ["Rohan", "Sohan", "Ganesh", "Kartik", "Arti"];
    let randomlang = ["Java", "C++", "Python", "js", "Sql"];
    let randomcities = ["Patna", "GolakDham", "Virindavan", "Mathura", "Kashi"];
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomnames),
            salary: Math.floor(Math.random() * 22000),
            language: getRandom(randomlang),
            city: getRandom(randomcities),
            isManager: (Math.random() > 0.5) ? true : false
        })

        console.log(e);

        //    await e.save();

    }
    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})