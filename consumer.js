const { kafka } = require('./client');

async function init() {
  const consumer = kafka.consumer({ groupId: "user-1" });
  await consumer.connect();

  await consumer.subscribe({ topic: "rider-updates", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`[${topic}]: PART:${partition}:`, message.toString());
    },
    
  });

  // If you want to disconnect later:
  // await consumer.disconnect();
}

init();