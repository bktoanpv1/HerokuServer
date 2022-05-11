const express = require('express');
const path = require('path');
const url = require('url');
const morgan = require('morgan')
const exhbs = require('express-handlebars');
const routes = require('./controllers/routes/routes.js');
const handlebars = exhbs.engine;
const app = express();
const PORT = 3000;

// for parsing application/json
app.use(express.json()); 
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//Set static path
app.use(express.static(path.join(__dirname)));
//HTTP logger
app.use(morgan('combined'));
//Template engine handlebars
app.engine('.hbs',handlebars({extname: '.hbs'}));
app.set('view engine','.hbs');
app.set('views', path.join(__dirname,'resources','views'));
console.log(__dirname);

routes(app);
app.get('/',function(req,res){
    res.render('preview');
});
console.log(process.env.PORT);
app.listen(process.env.PORT || PORT);