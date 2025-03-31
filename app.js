const express = require('express') // requiring the express package     \
const app = express()  // storing it in the app variable we will use it throughout the  project    
app.set("view engine","ejs") // setting the view engine to ejs

app.get('/',(req,res)=>{
  const person = {
    name: "Sandesh gadal"  ,
    age: 22,
    country: "Nepal",
    hobbies: ["coding","reading","gaming"],
    address: {
        city: "Chitwan",
        state: "Bagmati"
    },
  }
    res.render("home", {person}) // this is the response we will get when we visit the localhost:3000

})

app.get('/about',(req,res)=>{
    res.render("about") // this is the response we will get when we visit the localhost:3000/about

})

app.get('/cotact',(req,res)=>{
    res.send('Contact Page') // this is the response we will get when we visit the localhost:3000/contact
})

app.listen(3000,()=>{
    console.log("Node js server is running on port 3000")
})