const express = require('express')
const app = express()
const PORT = 8000


const character = {
    'luffy':{
        'age': 19,
        'birthName': 'Monkey D. Luffy',
        'alias': 'Lucy, Luffy-taro, Luffy-no-Umi, Straw Hat Luffy',
        'affiliation': 'Straw Hat Pirates',
        'bounty': '1,500,000,000 berries',
        'devilFruit': 'Gomu Gomu no Mi (Gum-Gum Fruit)'
    },
    'zoro':{
        'age': 21,
        'birthName': 'Roronoa Zoro',
        'alias': 'Pirate Hunter Zoro, Zoro-juurou',
        'affiliation': 'Straw Hat Pirates',
        'bounty': '320,000,000 berries',
        'devilFruit': 'None'
    },
    'nami':{
        'age': 20,
        'birthName': 'Nami',
        'alias': 'Cat Burglar, Namizo, Onami',
        'affiliation': 'Straw Hat Pirates',
        'bounty': '66,000,000 berries',
        'devilFruit': 'None'
    },
    'usopp':{
        'age': 19,
        'birthName': 'Usopp',
        'alias': 'King of Snipers, Sogeking, God Usopp, Usohachi',
        'affiliation': 'Straw Hat Pirates',
        'bounty': '200,000,000 berries',
        'devilFruit': 'None'
    },
    'sanji':{
        'age': 21,
        'birthName': 'Vinsmoke Sanji',
        'alias': 'Black leg, Mr. Prince, San-gorou, Soba Mask',
        'affiliation': 'Straw Hat Pirates',
        'bounty': '330,000,000 berries',
        'devilFruit': 'None'
    },
    'chopper':{
        'age': 17,
        'birthName': 'Tony Tony Chopper',
        'alias': 'Cotton Candy Lover, Chopa-emon',
        'affiliation': 'Straw Hat Pirates',
        'bounty': '100 berries',
        'devilFruit': 'Hito Hito no Mi (Human-Human Fruit)'
    },
    'robin':{
        'age': 30,
        'birthName': 'Nico Robin',
        'alias': 'Devil Child, Light of the Revolution, Miss All Sunday, O-Robi',
        'affiliation': 'Straw Hat Pirates',
        'bounty': '130,000,000 berries',
        'devilFruit': 'Hana Hana no Mi(Flower-Flower Fruit)'
    },
    'franky':{
        'age': 36,
        'birthName': 'Cutty Flam',
        'alias': 'Iron Man Franky, Fra-nosuke',
        'affiliation': 'Straw Hat Pirates',
        'bounty': '94,000,000 berries',
        'devilFruit': 'None'
    },
    'brook':{
        'age': 0,
        'birthName': 'Brook',
        'alias': 'Soul King, Hone-kichi, The Starving Skeleton',
        'affiliation': 'Straw Hat Pirates',
        'bounty': '83,000,000 berries',
        'devilFruit': 'Yomi Yomi no Mi (Revive-Revive Fruit)'
    },
    'jinbe':{
        'age': 46,
        'birthName': 'Jinbe',
        'alias': 'Knight of the Sea, First Son of the Sea, Boss Jinbe',
        'affiliation': 'Straw Hat Pirates',
        'bounty': '438,000,000 berries',
        'devilFruit': 'None'
    },
    'vivi':{
        'age': 0,
        'birthName': 'Nefeltari Vivi',
        'alias': 'Miss Wednesday',
        'affiliation': 'Arabasta Kingdom, Straw Hat Pirates',
        'bounty': 'None',
        'devilFruit': 'None'
    },
    'yamato':{
        'age': 28,
        'birthName': 'Yamato',
        'alias': 'Oni Princess, Kozuki Oden',
        'affiliation': 'Straw Hat Pirates',
        'bounty': 'None',
        'devilFruit': 'Inu Inu no Mi, Model:Okuchi no Makami (Dog-Dog Fruit)'
    },
    'gold roger':{
        'age': 53,
        'birthName': 'Gol D. Roger',
        'alias': 'Gold Roger, Pirate King',
        'affiliation': 'Roger Pirates',
        'bounty': '5,564,800,000 berries',
        'devilFruit': 'None'
    },
    'silvers rayleigh':{
        'age': 78,
        'birthName': 'Silvers Rayleigh',
        'alias': 'Dark King, Right Hand of the Pirate King',
        'affiliation': 'Roger Pirates',
        'bounty': 'unknown',
        'devilFruit': 'None'
    },
    'scopper gaban':{
        'age': 0,
        'birthName': 'Scopper Gaban',
        'alias': 'unknown',
        'affiliation': 'Roger Pirates',
        'bounty': 'unknown',
        'devilFruit': 'unknown'
    },
    'crocus':{
        'age': 73,
        'birthName': 'Crocus',
        'alias': 'Dcotor',
        'affiliation': 'Roger Pirates',
        'bounty': 'unknown',
        'devilFruit': 'unknown'
    },
    'kozuki oden':{
        'age': 39,
        'birthName': 'Kozuki Oden',
        'alias': 'Idiot Lord, Oden',
        'affiliation': 'Kozuki Family, Roger Pirates, White Beard Pirates',
        'bounty': 'None',
        'devilFruit': 'None'
    },
    'kozuki toki':{
        'age': 36,
        'birthName': 'Amatsuki Toki',
        'alias': 'unknown',
        'affiliation': 'Kozuki Family, Amatsuki Family, Roger Pirates, White Beard Pirates',
        'bounty': 'None',
        'devilFruit': 'Toki Toki no Mi (Time-Time Fruit)'
    },
    'shanks':{
        'age': 39,
        'birthName': 'Shanks',
        'alias': 'Red-Haired Shanks',
        'affiliation': 'Red Hair Pirates, Roger Pirates, Four Emperors',
        'bounty': '4,048,900,000 berries',
        'devilFruit': 'None'
    },
    'buggy':{
        'age': 39,
        'birthName': 'Buggy',
        'alias': 'Buggy the Clown, Buggy the Star Clown',
        'affiliation': 'Buggy Pirates, Roger Pirates, Seven Warlords of the Sea',
        'bounty': '15,000,000 berries',
        'devilFruit': 'Bara Bara no Mi (Chop-Chop Fruit)'
    },
    'dogstorm':{
        'age': 40,
        'birthName': 'Duke Inuarashi',
        'alias': 'Ruler of Day',
        'affiliation': 'Mokomo Dukedom, Roger Pirates, Whitebeard Pirates, Kozuki Family',
        'bounty': 'None',
        'devilFruit': 'None'
    },
    'cat viper':{
        'age': 40,
        'birthName': 'Nekomamushi',
        'alias': 'Ruler of Night',
        'affiliation': 'Mokomo Dukedom, Roger Pirates, Whitebeard Pirates, Kozuki Family',
        'bounty': 'None',
        'devilFruit': 'None'
    },
    'kozuki momonosuke':{
        'age': 8,
        'birthName': 'Kozuki Momonosuke',
        'alias': 'Shogun of Wano',
        'affiliation': 'Kozuki Family',
        'bounty': 'None',
        'devilFruit': 'Artificial Devil Fruit'
    },
    'kozuki hiyori':{
        'age': 26,
        'birthName': 'Kozuki Hiyori',
        'alias': 'Komurasaki',
        'affiliation': 'Kozuki Family',
        'bounty': 'None',
        'devilFruit': 'None'
    },
    'ace':{
        'age': 20,
        'birthName': 'Portgas D. Ace',
        'alias': 'Fire Fist',
        'affiliation': 'White Beard Pirates',
        'bounty': '550,000,000 berries',
        'devilFruit': 'Mera Mera no Mi (Flame-Flame Fruit)'
    },
    'whitebeard':{
        'age': 72,
        'birthName': 'Edward Newgate',
        'alias': 'Whitebeard, The Strongest Man in the World, The Man Closest to One Piece',
        'affiliation': 'Whitebeard Pirates, Four Emperors, Rocks Pirates',
        'bounty': '5,046,000,000 berries',
        'devilFruit': 'Gura Gura no Mi (Tremor-Tremor Fruit)'
    },
    'marco':{
        'age': 45,
        'birthName': 'Marco',
        'alias': 'Marco the Phoenix',
        'affiliation': 'Whitebeard Pirates',
        'bounty': '1,374,000,000 berries',
        'devilFruit': 'Tori Tori no Mi, Model: Phoenix'
    },
    'izou':{
        'age': 45,
        'birthName': 'Izou',
        'alias': '16th Division Commander',
        'affiliation': 'Kozuki Family, Whitebeard Pirates',
        'bounty': '510,000,000 berries',
        'devilFruit': 'None'
    },
    'jozu':{
        'age': 42,
        'birthName': 'Jozu',
        'alias': 'Diamond Jozu',
        'affiliation': 'Whitebeard Pirates',
        'bounty': 'unknown',
        'devilFruit': 'Kira Kira no Mi (Twinkle-Twinkle Fruit)'
    },
    'blackbeard':{
        'age': 40,
        'birthName': 'Marshall D. Teach',
        'alias': 'Blackbeard',
        'affiliation': 'Blackbeard Pirates, Four Emperors, Seven Warlords of teh Sea, Whitebeard Pirates',
        'bounty': '2,247,600,000',
        'devilFruit': 'Yami Yami no Mi (Dark-Dark Fruit), Gura Gura no Mi (Tremor-Tremor Fruit)'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'alias': 'unknown',
        'affiliation': 'unknown',
        'bounty': 'unknown',
        'devilFruit': 'unknown'
    }
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:onePieceCharacter', (request,response)=>{
    const onePieceChars = request.params.onePieceCharacter.toLowerCase()
    if(character[onePieceChars]){
        response.json(character[onePieceChars])
    }else{
        response.json(character['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})