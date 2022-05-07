// Require handle for each route.
const routesHandle = require('./routesHandle.js');

function routes(app){
  //Render view
  app.get('/pageContent',routesHandle.get_pageContent)
  app.get('/',routesHandle.get_preview);
  // handle for POST method
  app.post('/', (req, res) => {
    res.send('POST request to the homepage')
    console.log("Post me!")
  })
}
// Export module
module.exports = routes;
