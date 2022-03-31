const express = require('express');
const appp = express();
const Bree = require('bree');


const bree = new Bree({
    jobs:[{
        name:'mailer', // used to define the jobs to track it works as worker underhood
        interval: '5s',
        // cron: '* * * * *', // can be used to schedule cron
        // worker: {
        //     workerData: {
        //         name: 'Zuha'
        //     }
        // }
    }]
});

bree.start();
appp.listen(3000, () => {
    console.log('listening on 3000');
});