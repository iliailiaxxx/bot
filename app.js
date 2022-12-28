const express = require("express")
const app = express()
const PORT = process.env.PORT ||3000
let ardiChat = '-799921306'
let testChat = '-788676629'
let millisTill10


function getDate(){
    var now = new Date();
    millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 30, 0, 0) - now;
    if (millisTill10 < 0) {
     millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
 }
}
function sendRemind(){
    axios.request(`https://api.telegram.org/bot5659999694:AAEKgoPjaUWZmHscyKLpsROpljHqRMSddoM/sendMessage?chat_id=${testChat}&text=SAYONARA BEACH!`)
}
function interval(time){
    console.log(millisTill10)
    setTimeout(()=>{
        sendRemind()
        getDate()
        interval(millisTill10)
    }, time);
}
getDate()
interval(millisTill10)






app.listen(PORT,()=>{
})
