const reportTemperature = {
  inputTopic: 'sensors/temperature/in', // topic to subscribe to
  outputTopic: 'sensors/temperature/out', // topic to publish to
  trigger: 'status', // valid payload
  output: 'bin/indoor', // command to be executed
};

module.exports = {
  id: 'living-room-temperature' || process.env.SENSOR_ID,
  connection: {
    hostname: '' || process.env.MQTT_HOST,
    options: {
      username: '' || process.env.MQTT_USER,
      password: '' || process.env.MQTT_PASS,
    },
  },
  actions: [reportTemperature],
};
