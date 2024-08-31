const express = require('express')
const path  = require('path')
const hbs =  require('hbs')
const app = express()
const port = 8000

// const viewpath = path.join(__dirname,"../public")  

// app.use(express.static(path.join(__dirname,'..cd/public')))

app.set('view engine','hbs')
app.set('views', path.join(__dirname,"../templates/views"));

hbs.registerPartials(path.join(__dirname,"../templates/partials"))

app.get('/', (req, res) => {
    res.render('index',{
        Username :"Sujal Bharadiya"
    });  // Ensure the file 'index.ejs' exists in 'views' directory
});

app.get("/about",(req,res)=>{
    res.render('about',{
          Username :"Sujal Bharadiya"
    })
})                                      



app.get("*",(req,res)=>{
    res.render("404",{
        errorcoment:"Oppes Page couldn't Found"
    })
})

app.listen(port,()=>{
    console.log(`"http://localhost:${port}"`)
})