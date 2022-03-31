const express = require('express');
const appp = express();
const Bree = require('bree');


const bree = new Bree({
    jobs:[{
        name:'Dummy',
        cron: '* * * * *',
        worker: {
            workerData: {
                name: 'Zuha'
            }
        }
    }]
});

bree.start();
appp.listen(3000, () => {
    console.log('listening on 3000');
});