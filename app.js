const express = require("express")
const app = express()
const axios = require('axios')
const PORT = process.env.PORT ||3000
const ardiChat = '-799921306'
const testChat = '2050460099'
const array = ['Леша','Натали','Богдан','Настя','Илья','Женя','Коля','Влад','Саша Стребков','Саша Соколов','Яна','Даша','Костя','Кирилл','Саша Шкаликов']
const text = ` сегодня дежурный
- порядок на кухне 
- кофемашина (чистота/молоко/слив) 
- напоминаем коллегам, кто не убрал после себя
- мусорные ведра`

let gdate = new Date()

const TelegramBot = require('node-telegram-bot-api');
const token = '5659999694:AAHurTwbHAUZWKIwjYSXaE7DimmKZXNmZTY';
const bot = new TelegramBot(token);


bot.sendMessage(testChat,`${text}`)


app.listen(PORT,()=>{})
