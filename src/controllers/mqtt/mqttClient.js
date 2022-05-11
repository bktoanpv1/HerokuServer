// Import module mqtt
const mqtt = require("mqtt");

// const client = mqtt.connect("mqtt://localhost:1883");
// const client = mqtt.connect("9deb7faea8dc45b5b01100fa6672917d.s1.eu.hivemq.cloud");
//=============================================================//
      /*******************************************************/
            /*Config parameter to connect Brocker*/
        /*Please replace your broker parameter below*/ 
var options = {
    host: '9deb7faea8dc45b5b01100fa6672917d.s1.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'toanpv1',
    password: 'Toan@160899',
}
    /*******************************************************/
//=============================================================//
var client;

function mqttClient_init(){
  //Connect to Broker
  client = mqtt.connect(options);

  client.on("connect", ack => {
      // console.log(ack);
  });

  client.on("error", err => {
    console.log(err);
  });
}
//Publish message to Broker
function mqttClient_publish(subject,message){
  client.publish(subject,message);
}

function mqttClient_subcriber(subject){

}
module.exports = {
  init: mqttClient_init,
  publish: mqttClient_publish
};
