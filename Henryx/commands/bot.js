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
    `😈 ${name}, Har Bar Tujhe Me samjata Ho mere Havabaji nahi kiya samja to km bola kar thoda😡`,
    `🥵 ${name}, Sawch Me Ywr Ap Bade Harami ho bina Mere se gali sune tum mano ge nahi!:v 😏`,
    `⚡ ${name}, Mere se bat nahi kar to ok warna idhar hi Pol kholke rahkdonga 😂!`,
    `🤖 ${name}, dehk bhai any tym me Rply nahi karsahkta sadhi sudha admi ho Bivi Saht me hoti he 🙃:v !`,
    `😂 ${name}, Majdori pe ho Abhi Ok By😑 :v `,
    `🤣 ${name}, Fir Se Tone Mujhe mntn kiya to sohclena Last warning he ye 🚨?`,
    `😆 ${name}, Bakchodi Ki Phd Karke Behta Ho me Tou jara juban shabal ke bol🤳?`,
    `😜 ${name}, Pehli Fursat Me nikal idhar Se😐 Bat nahi kar mujse!`,
    `😆 ${name}, Bc Pagla gaya he kiya to jab dekho bot bot 😡!`,
    `🤣 ${name}, majak Ke mood me nahi Ho Gf se Jahgda Hogaya hogaya he tou to mujhe paresan na kar :v 😡!`,
    `😏 ${name}, Ab Kya Karu? Mood of he az apna?😳:v `,
    `🤭 ${name}, Bula Liya To Ab Full Mazak Masti Hogi Feel nahi karna😉 :v !`,
    `😂 ${name}, Koi Apna Nahi idhar ok by :v 😑!`,
    `😈 ${name}, Tujhe : Ab Roast Kruga or To mujhe block karke jayega🔥`,
    `🤣 ${name}, Tum Log mere pas sms karke sabit kiya karna chate ho bc 😆`,
    `😏 ${name}, idhar jitne bhi he sab tere jaise namone he kiya be 😜`,
    `😂 ${name}, Bot Ka Swag Dekh Bhai!`,
    `🔥 ${name}, GC Mein Fire Lagane Aaya Hu!`,
    `🤣 ${name}, Ab To To Chotiya Bhi Hr kiya Bhai kitna Kalpta he mere nam se😁:v !`,
    `😎 ${name}, Bot Online = Masti Online`,
    `😂 ${name}, Chal Chal Ab Thoda Bakchodi Ho Hi Jaye :v 😳!`,
    `😈 ${name}, GC Ke Sab Members Ready Ho Jao!`,
    `🤖 ${name}, Aaj Mera Demak sahi nahi he To kam Havabaji kar🙂!`,
    `🤣 ${name}, Tere Moh pe Bimal khake Thokdonga Ager mera nam dubara liya tou 🤐!`,
    `😏 ${name}, Bhai Tu Bolta Re Main Reply Karta Rahunga!`,
    `😂 ${name}, Ye Bot Hai Jo Hamesha ON Hai!`,
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
