require('dotenv').config();
const util = require('util');
const cp = require('child_process');
const mqtt = require('mqtt');
const { id, connection, actions } = require('./config');
const logger = require('./logger');

const exec = util.promisify(cp.exec);
const client = mqtt.connect(`mqtt://${connection.hostname}`, connection.options);

client.on('connect', () => {
  logger.info('@connect');
  actions.forEach(a => client.subscribe(a.inputTopic));
});

client.on('message', async (topic, buffer) => {
  const trigger = buffer.toString();
  logger.info({ topic, trigger }, '@message');
  // search for a matching action
  const action = actions.find(a => a.inputTopic === topic && (!a.trigger || a.trigger === trigger));
  // no action found
  if (action === undefined) return;
  // execute found action
  try {
    const { stdout, stderr } = await exec(action.output);
    if (stderr) {
      throw new Error(stderr);
    }
    const output = JSON.parse(stdout.trim());
    output.id = id;
    client.publish(action.outputTopic, JSON.stringify(output), { retain: true });
  } catch (err) {
    logger.error(err);
  }
});
