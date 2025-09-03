const {kafka } = require('kafkajs');

const kafka = new kafka({
    clientId:"my-app",
    brokers: ["https://192.168.1.6:9092"],

})

async function init(){
    
const admin = kafka.admin()
    console.log('Admin connecting...')
    admin.connect();
    console.log("Admin Connection Success");

    await admin.createTopics({
        validateOnly: <boolean>,
        waitForLeaders: <boolean>
        timeout: <Number>,
        topics: <ITopicConfig[]>,
    })
    

}





