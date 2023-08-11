// our dependecies

const express = require('express')
const app = express()
const mysql = require ('mysql')
const cors = require ('cors')

app.use(express.json())
app.use(cors())

//let us run the server 
app.listen(3002, ()=> {
    console.log('Server is running on port 3002')
})

//let us create our database (mysql)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'ai'

})

//let us now create a route to the server that will register a user

app.post('/register', (req, res)=> {
    // we  need to get variables sent from the form
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    //lets create sQL statement to insert the user to the DB table users
    const SQL = 'INSERT INTO users(email, username, password) VALUES(?,?,?)' 
    // Where are going to enter these values through a variable
    const Values =[sentEmail,sentUserName, sentPassword]

    //Query to execute the sql statement stated above
    db.query(SQL, Values, (err, results)=> {
        if (err) {
            res.send(err)
        }
        else{
            console.log('User insert successfully!')
            res.send({message: 'User - added!'})
        }
    })
})

//Now we  need to login with these credentials from registered User
//lets create another route

app.post('/login', (req, res)=> {
     // we  need to get variables sent from the form
     
     const sentloginUserName = req.body.LoginUserName
     const sentLoginPassword = req.body.LoginPassword
 
     //lets create sQL statement to insert the user to the DB table users
     const SQL = 'SELECT * FROM users WHERE username = ? && password = ?'
     // Where are going to enter these values through a variable
     const Values =[sentloginUserName, sentLoginPassword]

     db.query(SQL, Values, (err, results)=>{
        if (err) {
            res.send({error:err})
        }
        if (results.length > 0) {
            res.send(results)
        }
        else{
            res.send({message: 'Credentials dont match'})
            //this should be good, lets try to login
        }
     })
})