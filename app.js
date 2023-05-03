const express = require("express")
const app = express()
const axios = require('axios')
const PORT = process.env.PORT ||3000
const ardiChat = '-799921306'
const testChat = '2050460099'
const array = ['Леша','Богдан','Настя','Илья','Женя','Влад','Саша Стребков','Яна','Даша','Костя','Кирилл','Саша Шкаликов']
const text = ` сегодня дежурный
- порядок на кухне 
- кофемашина (чистота/молоко/слив) 
- напоминаем коллегам, кто не убрал после себя
- мусорные ведра и вынести мусор
- проверить приборы и свет`

let gdate = new Date()

const TelegramBot = require('node-telegram-bot-api');
const token = '5659999694:AAHurTwbHAUZWKIwjYSXaE7DimmKZXNmZTY';
const bot = new TelegramBot(token);


async function apps(){
    let current = await getFromDb()
    if(gdate.getDay()===6||gdate.getDay()===0){
        process.exit()
    }
    const currentIndex = array.indexOf(current.data.data.name)
    const nextIndex = (currentIndex + 1) % array.length
    const currentName = array[nextIndex]
    await bot.sendMessage(ardiChat,`${currentName}${text}`)
    await putInDb(currentName,gdate.getDate())
    process.exit()
}
apps()




async function getFromDb(){
    return await axios({
        method: 'get',
        url: 'https://2a23c5d4-5735-4bb9-8398-abf11c30b867-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/bot/collections/bot/bot',
        headers: {
            "accept": "application/json",
            "X-Cassandra-Token": "AstraCS:rflmYZmoziplMovmyltPBuSf:bef5a0be80e89aac5aef5da437eef04ba7fcf06965f7c4f20685dae40b3171ab"
        }
      })
}

async function putInDb(name,date){
    return await axios({
        method: 'PUT',
        url: 'https://2a23c5d4-5735-4bb9-8398-abf11c30b867-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/bot/collections/bot/bot',
        headers: {
            "accept": "application/json",
            "X-Cassandra-Token": "AstraCS:rflmYZmoziplMovmyltPBuSf:bef5a0be80e89aac5aef5da437eef04ba7fcf06965f7c4f20685dae40b3171ab",
            "Content-Type": "application/json"
        },
        data:{
            "name":name,
            "date":date
        }
      })
}

app.listen(PORT,()=>{})
