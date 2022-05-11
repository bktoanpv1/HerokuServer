// Require handle for each route.
const routesHandle = require('./routesHandle.js');

function routes(app){
  //Render view
  app.get('/pageContent',routesHandle.get_pageContent)
  app.get('/',routesHandle.get_preview);
  //Handle for all mqtt request
  app.post('/post/request',routesHandle.mqtt_handle);
}
// Export module
module.exports = routes;
