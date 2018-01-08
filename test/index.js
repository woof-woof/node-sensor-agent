require('dotenv').config();
const mqtt = require('mqtt');

const client = mqtt.connect(`mqtt://${process.env.MQTT_HOST}`, {
  username: process.env.MQTT_USER,
  password: process.env.MQTT_PASS,
});

client.on('connect', () => {
  console.log('@connect');
  client.subscribe('sensors/temperature/out');
});

client.on('message', (topic, buffer) => {
  console.log('@message', topic, JSON.parse(buffer.toString()));
});

client.publish('sensors/temperature/in', 'status');
