const reportTemperature = {
  inputTopic: `${process.env.TOPIC_TEMPERATURE || 'sensors/temperature'}/in`, // topic to subscribe to
  outputTopic: `${process.env.TOPIC_TEMPERATURE || 'sensors/temperature'}/out`, // topic to publish to
  trigger: 'status', // valid payload
  output: `bin/indoor ${process.env.SENSOR_FILE_PATH || `${__dirname}/../bin/dht22/temp`}`, // command to be executed
};

module.exports = {
  id: process.env.SENSOR_ID || 'living-room-temperature',
  connection: {
    hostname: process.env.MQTT_HOST || 'localhost',
    options: {
      username: process.env.MQTT_USER || '',
      password: process.env.MQTT_PASSWORD || '',
    },
  },
  actions: [reportTemperature],
};
