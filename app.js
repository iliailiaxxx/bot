const express = require("express")
const app = express()
const schedule = require('node-schedule')
const PORT = process.env.PORT ||3000
const ardiChat = '-799921306'
const testChat = '-788676629'
const array = ['Леша','Натали','Богдан','Настя','Илья','Женя','Коля','Влад','Саша Стребков','Саша Соколов','Яна','Даша','Костя','Кирилл','Саша Шкаликов']
let counter = 0
const text = ` сегодня дежурный
- порядок на кухне 
- кофемашина (чистота/молоко/слив) 
- напоминаем коллегам, кто не убрал после себя
- мусорные ведра`
const TelegramBot = require('node-telegram-bot-api');
const token = '5659999694:AAEKgoPjaUWZmHscyKLpsROpljHqRMSddoM';
const bot = new TelegramBot(token);

async function sendRemind(){
    if(counter === array.length){counter = 0}
    await bot.sendMessage(testChat,`${array[counter]}${text}`)
}


schedule.scheduleJob('* 0 5 * * 1-5', () => { 
    sendRemind().then(()=>{
        counter++
    })
})



app.listen(PORT,()=>{})
