const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = mysql.createConnection({
    host: '85.10.205.173',
    user: 'livewell',
    password: 'livewell',
    database: 'livewell'
});

app.use(cors());
app.use(express.json());

app.listen(3001,()=>{

console.log("running on port 3001");


});

app.use(bodyParser.urlencoded({extended:true}))

db.connect(err => {
  if (err) {
    console.log(err);
  }

  console.log('Connected to the database');
});

app.post("/api/post", (req, res) => {
    const plan = req.body.planname;
    const type = req.body.plantype;
    const speciality = req.body.speciality;
    const gender = req.body.gender;
    const location = req.body.location;
      const duration = req.body.duration;
      const cost = req.body.cost;
      const email = req.body.email;
  console.log("test")
      db.query("INSERT INTO plan_detail (email, plan,type, speciality, gender, location, duration,cost) values(?,?,?,?,?,?,?,?)", [email,plan,type, speciality, gender, location, duration,cost], (err, result) => {
          console.log(result);
          if (err) {
            return res.json({error: err});
          }
  
          return res.json({});
      });

    
  });


app.post("/api/details", (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const phone = req.body.phone;
    const speciality = req.body.speciality;
    const location = req.body.location;
    const experience = req.body.experience;
  
    console.log("test")
    db.query("INSERT INTO trainer_detail (email, name,phone, speciality, location, experience) values(?,?,?,?,?,?)", [email, name, phone, speciality, location, experience], (err, result) => {
        console.log(result);
        if (err) {
            return res.json({ error: err });
        }

        return res.json({});
    });


});

app.post("/api/searchtrainers", (req, res) => {

    const speciality = req.body.speciality;
  
    const location = req.body.location;

    console.log("test_trainers")
    db.query("select * from trainer_detail  where speciality=? AND location=? ", [speciality,location], (err, result) => {
        console.log(result);
        res.send(result);
    });


});

app.post("/api/searchplans", (req, res) => {
    const type = req.body.type;
    const speciality = req.body.speciality;
  //  const gender = req.body.gender;
    const location = req.body.location;

    console.log("test")
    db.query("select p.*,t.* from plan_detail p,trainer_detail t where p.type=? AND p.speciality=?  AND p.location=? AND p.email=t.email", [type,speciality,location], (err, result) => {
        console.log(result);
        res.send(result);
    });


});