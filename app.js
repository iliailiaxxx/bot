const express = require("express")
const app = express()
const axios = require('axios')
const schedule = require('node-schedule')
const PORT = process.env.PORT ||3000
let ardiChat = '-799921306'
let testChat = '-788676629'


function sendRemind(){
    axios.request(`https://api.telegram.org/bot5659999694:AAEKgoPjaUWZmHscyKLpsROpljHqRMSddoM/sendMessage?chat_id=${testChat}&text=SAYONARA BEACH!`)
}

schedule.scheduleJob('60 * * * * 1-5', () => {sendRemind()})

app.listen(PORT,()=>{})
