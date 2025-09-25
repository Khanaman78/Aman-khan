const fs = global.nodemodule["fs-extra"];
const axios = require("axios");

module.exports.config = {
  name: "goibot",
  version: "5.1.0",
  hasPermssion: 0,
  credits: "⚡ Luffy ⚡ + Modified by GPT",
  description: "Super Funny Bot (30+ Random Replies)",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 2,
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  const { threadID, messageID, body, senderID } = event;
  if (!body) return;

  const name = await Users.getNameUser(senderID);
  const text = body.toLowerCase();

  // --- Trigger Condition ---
  if (!text.includes("bot")) return;

  // ------------------- 30+ SUPER FUNNY REPLIES -------------------
  const funnyReplies = [
    `😂 ${name}, Janab Kya Aap BerozGar Ho Jo mere Se bakchodi Karte Ho roj idhar aker😳?`,
    `🔥 ${name}, Mujhe Bula Ke Galti Krdi Tune lvl Bana Apna 😊`,
    `🤣 ${name}, Abe Bot Hu Koi tera Gulam nahi jo Mntn karta rehta he?`,
    `😏 ${name}, Ab Tujh Jaise Low lvl Admi mujse inshaf mange ga🤔 :v ?`,
    `👑 ${name}, Tu Rehne de yar Mujhe mntn nahi kar warna teri gf ko ss dedonga😡:v `,
    `😈 ${name}, Har Bar Tujhe Me samjata Ho mere samne Havabaji nahi kiya Kar samja to 😡`,
    `🥵 ${name}, Sawch Me Ywr Ap Bade Harami ho bina Mere se gali sune tum mano ge nahi!:v 😏`,
    `⚡ ${name}, Mere se bat nahi kar to ok warna idhar hi Pol kholke rahkdonga 😂!`,
    `🤖 ${name}, dehk bhai any tym me Rply nahi karsahkta sadhi sudha admi ho Bivi Saht me hoti he 🙃:v !`,
    `😂 ${name}, Majdori pe ho Abhi Ok By😑 :v `,
    `🤣 ${name}, Fir Se Tone Mujhe mntn kiya to sohclena Last warning he ye 🚨?`,
    `😆 ${name}, Bakchodi Ki Phd Karke Behta Ho me Tou jara juban shabal ke bol🤳?`,
    `😜 ${name}, Pehli Fursat Me nikal idhar Se😐 Bat nahi kar mujse!`,
    `😆 ${name}, Bc Pagla gaya he kiya to jab dekho bot bot 😡!`,
    `🤣 ${name}, majak Ke mood me nahi Ho Gf se Jahgda Hogaya he tou to mujhe paresan na kar :v 😡!`,
    `😏 ${name}, Bot Bot Chilha Ke Q Gala Faad Rakha He ?😳:v `,
    `🤭 ${name}, Tune Dubara Ager Bot Bola Tujhe idhar se Remove Kardonga Feel nahi karna Fir😉 :v !`,
    `😂 ${name}, Koi Apna Nahi idhar ok by Sab Apne kam Ke liye Mntn Karte He Bhad me Ja To :v😾!`,
    `😈 ${name}, Tujhe : Ab Roast Kruga or To mujhe Bad Me Inbox Karna😊 Lvu Babu Bolke🔥`,
    `🤣 ${name}, Tum Log mere pas sms karke sabit kiya karna chate ho bc 😆`,
    `😏 ${name}, idhar jitne bhi he sab tere jaise namone he kiya be 😜`,
    `😂 ${name}, Bot se Bakchodi Ager Karni He Tou lvl Badha Apna Falto me idhar Bot bot Karke Havabaji na kar😾!`,
    `🔥 ${name}, Tera Bohat Mota Dimak He kisi Or Ke Pas Jake bakchodi Kar mere Paas Time nahe 😊!`,
    `🤣 ${name}, Ab To To Chotiya Bhi Hr kiya Bhai kitna Kalpta he mere nam se😁:v !`,
    `😎 ${name}, Kiya Be Nalle berojgar Chapriyo Samj Nahi ati kiya piyar ki bhasa mntn nahi karna duvara😾`,
    `😂 ${name}, Chal Pehli fursat Me nikal idhar se mera Mood Nahi tujhe Rply Karo😊 :v 😳!`,
    `😈 ${name}, Bc Garibo ke Jony levor Sakal Achi Nahe Kamse Kam Bat Tou Dhanki Kiya Kar😊!`,
    `🤖 ${name}, Mere Paas wahtsup He insta He Facebook He tere paas kiya he bhikari 1 id Vo bhi kiraye ki or To chata he me tujhe rply karo bc🙂!`,
    `🤣 ${name}, Tere Moh pe Bimal khake Thokdonga Ager mera nam dubara liya tou 🤐!`,
    `😏 ${name}, Ghar me Tumhari koi Sunta nahi or tum Log  Cahte ho bot Tumse Baat kare Bc Ambani wale khuwab 😾!`,
    `😂 ${name}, Ye Bot Hai Jo Sabko Rply kardeta he Warna tumhari okhat pados ki dukan se udhar milne walibhi nahi he😾 !`,
    `🔥 ${name}, To Thoda Sa Beh****n ka L***da bhi he kiya Jo mujse Ulhaj raha he😜!`,
  ];

  // Random reply
  const reply = funnyReplies[Math.floor(Math.random() * funnyReplies.length)];

  // --- Typing Animation ---
  api.sendTypingIndicator(threadID, true);
  setTimeout(() => {
    api.sendMessage(reply, threadID, messageID);
  }, 700);

  // --- Random Sticker/GIF (20% chance) ---
  if (Math.random() < 0.2) {
    try {
      const imgURL = "https://i.imgur.com/Ck9iwT2.jpeg";
      const stream = (await axios.get(imgURL, { responseType: "stream" })).data;
      api.sendMessage({ attachment: stream }, threadID);
    } catch (err) {
      console.log("Sticker send failed:", err.message);
    }
  }
};

module.exports.run = () => {};
