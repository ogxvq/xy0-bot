const Discord = require('discord.js')
const bot = new Discord.Client();
const cheerio = require('cheerio');
const request = require('request');
const token = 'token'
const PREFIX = '$';
var servers = {};
var version = '1.2';
// reply commands (allot)
bot.on('message', msg=>{
    if(msg.content === "$learn javascript"){
        msg.reply('https://www.w3schools.com/js/default.asp')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$learn coding"){
        msg.reply('https://www.w3schools.com')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$learn python"){
        msg.reply('https://www.w3schools.com/python/default.asp')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$learn c++"){
        msg.reply('https://www.w3schools.com/cpp/default.asp & https://www.learncpp.com')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$learn html"){
        msg.reply('https://www.w3schools.com/html/default.asp')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$learn css"){
        msg.reply('https://www.w3schools.com/css/default.asp')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$learn php"){
        msg.reply('https://www.w3schools.com/php/default.asp')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$status"){
        msg.reply('online')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$contact"){
        msg.reply('mc68F5@protonmail.ch')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$website"){
        msg.reply('http://xvq.000webhostapp.com/')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$who is awesome"){
        msg.reply('<-----')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$who is cool"){
        msg.reply('<-----')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$gg"){
        msg.reply('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FLCAMvnCx2X8%2Fmaxresdefault.jpg&f=1&nofb=1')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$m distinction problems"){
        msg.reply('https://www.youtube.com/watch?v=7fooB3s39YM')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$m distinction dont understand"){
        msg.reply('https://www.youtube.com/watch?v=sa3GF60SCfo')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$m distinction stay in the light"){
        msg.reply('https://www.youtube.com/watch?v=18OwZbWoubM')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$n-word"){
        msg.reply('Nickelback')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$who is nice"){
        msg.reply('<---')
    }
})
bot.on('message', msg=>{
    if(msg.content === "$help"){
        msg.reply('http://xvq.000webhostapp.com/commands.html')
    }
})
bot.on('ready', () =>{
    console.log('working/online');
    bot.user.setActivity('if you have any issues with the bot please contact, xvq#9899', {
    }).catch(console.error);
})
// cursed image output
bot.on('message', message => {
 
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case 'cursed':
        image(message);
 
        break;
    }
 
});
function image(message){
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "cursed image",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
 
        $ = cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
}
// flip math and command
bot.on('message', async koolMessage => {
  if (koolMessage.content.startsWith("$flip")) {
    let outcomes = ["heads", "tails"];
    let outcomesIndex = Math.round(Math.random() * outcomes.length);
    koolMessage.channel.send(outcomes[outcomesIndex]);
  }
});
bot.login(token);