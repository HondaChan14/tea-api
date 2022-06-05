const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors')

app.use(cors());

const tea = {
    'oolong':{
        'type': 'black',
        'origin': 'Yo Mamas House',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': true, 
        'flavor': 'delicous'
    },
    'matcha':{
        'type': 'green',
        'origin': 'Yo Mamas House',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': false, 
        'flavor': 'delicous'
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTimeSeconds': 0,
        'caffinated': false, 
        'flavor': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')
})

app.get('/api/:name', (req, res) => {
    const teaName = req.params.name.toLowerCase()
    if(tea[teaName]){ //if tea object has teaName (aka ooolong or matcha) then its true
        res.json(tea[teaName])
    }else{
        res.json(tea['unknown'])
    }
})

app.listen(PORT, () =>{
    console.log(`Connected to Port ${PORT}!`)
})