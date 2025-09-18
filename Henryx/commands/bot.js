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
    `😂 ${name}, Janab Kya Aap BerozGar Ho Jo Mere Se Bakchodi Karte Ho😶‍🌫️?`,
    `🔥 ${name}, Mujhe Bula Ke Galti Krdi Tune😁 Me Tere Se Jiyada Bakchod ho🌛😂`,
    `🤣 ${name}, Abe Bot Hu iska Ye matlab Nahi Tera Nokar ho 😳 Bc Jiyada Havabaji nahi kar ok🤳?`,
    `😏 ${name}, Ab Tujh Jaise Low lvl Log Mujhe Mntn karege 🥹😆 ?`,
    `👑 ${name}, Tu Sala Nalla Berojgar Chapri 🤐 Mujse bak bak karega Ab 🙃`,
    `😈 ${name}, Dehk Bhai Me Sadhi Sudha Ho😊 Jiyada Idhar Rply Nahi Kar sahkta Meri Bivi saht me he 😢 Samja Kar Yar`,
    `🥵 ${name}, To mera Nam Mntn Kar Karke Konsa Awrd Lele Ga Bc 😆Majdoor ka Majdoor hi rahega `,
    `⚡ ${name}, Ha Bolo Kiya masla he Tumhara Jo Roj Roj Mere Nam Se Kalpte ho😊🔥`,
    `🤖 ${name}, Kya Baat Hai Bhai Q Pareshan Ho 🤔 !`,
    `😂 ${name}, Tu Subha Se Mera Dimak Khane Me Laga He🤬 bc!`,
    `🤣 ${name}, Fir Se Tujhe Pelna Shuru Karu?`,😊
    `😆 ${name}, Chotiya Insan Ho Kiya Tum Jo Subha Sham Bot Bot Chilate ho `,
    `😜 ${name}, Abe Havabaji Band Kar Sidha Mudde pe Aa 🙃!`,
    `😆 ${name}, GC Ka Masti Machine Hu Main!`,
    `🤣 ${name}, Bot = Entertainment Ki Dukan!`,
    `😏 ${name}, Ab Kya Karu? Chhedu Kise?`,
    `🤭 ${name}, Bula Liya To Ab Full Mazak Masti!`,
    `😂 ${name}, Chal GC Mein Masala Dalte Hai!`,
    `😈 ${name}, Road Mode: Ab Roast Kruga Subko 🔥`,
    `🤣 ${name}, Tum Log Bot Ko Bulake Phas Gaye 😆`,
    `😏 ${name}, Ab To Sabko Roast Karunga 😜`,
    `😂 ${name}, Bot Ka Swag Dekh Bhai!`,
    `🔥 ${name}, GC Mein Fire Lagane Aaya Hu!`,
    `🤣 ${name}, Ab To Hansi Ka Tsunami Aayega!`,
    `😎 ${name}, Bot Online = Masti Online`,
    `😂 ${name}, Chal Thoda Bakchodi Ho Jaye!`,
    `😈 ${name}, GC Ke Sab Members Ready Ho Jao!`,
    `🤖 ${name}, Aaj Mai Mood Mein Hu Full Maja Milega!`,
    `🤣 ${name}, Bot Aaya Hai Memes Ke Sath!`,
    `😏 ${name}, Bhai Tu Bolta Re Main Reply Karta Rahunga!`,
    `😂 ${name}, Ye Bot Hai Jo Hamesha ON Hai!`,
    `🔥 ${name}, Tujhe Pata Hai India Me Sirf Do Hi Chiz Famous Hai 1st Modi Ji Ki Backchodi Dusri Meri!`,
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
      const imgURL = "https://i.ibb.co/3C9t1fr/funny-sticker.png";
      const stream = (await axios.get(imgURL, { responseType: "stream" })).data;
      api.sendMessage({ attachment: stream }, threadID);
    } catch (err) {
      console.log("Sticker send failed:", err.message);
    }
  }
};

module.exports.run = () => {};
