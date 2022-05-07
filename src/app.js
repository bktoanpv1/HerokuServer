const express = require('express');
const path = require('path');
const morgan = require('morgan')
const exhbs = require('express-handlebars');
const routes = require('./controllers/routes/routes.js');
const handlebars = exhbs.engine;
const app = express();
const PORT = 3000;

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
app.listen(PORT);