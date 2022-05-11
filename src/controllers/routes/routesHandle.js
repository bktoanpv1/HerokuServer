var mqttClient = require('../mqtt/mqttClient.js');
// Initial connection to mqtt broker
mqttClient.init();

//Handler for each request from client
get_pageContent = function (req,res){
    console.log(req.query);
    res.render('pageContent');
}

get_ = function (req,res){
    res.send('GET request to the homepage');
    mqttClient.publish("test","hi");
}
get_preview = function(req,res){
    res.render('preview');
}

mqtt_handle = function(req,res){
    //Check valid of subject / message
    console.log("Subject: " + req.body.subject);
    console.log("Message: " + req.body.message);
    //Send to borker
    mqttClient.publish(req.body.subject,req.body.message);
    res.send("Post accepted!");
}
module.exports = {
    get_ : get_,
    get_pageContent: get_pageContent,
    get_preview: get_preview,
    mqtt_handle: mqtt_handle,
};