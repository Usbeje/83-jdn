
global.owner = [
  ["6288211118394"],
]; 

global.numberbot = "Saitama-Bot";
global.nameowner = "Ganutc_exploitz";
global.nomorown = "6288211118394";

/*Ini Isi dengan Payment kalian masing masing*/
global.dana = "6288211118394";
global.pulsa = "6288211118394";
global.ovo = "DANA / QRIS ONLY";

/*Apa Itu apikey ??*/
global.APIs = {};
global.APIKeys = {};
global.ocrapi = "314b4b8b2d88957";

//Other Settings
global.namebot = "©Saitama-Bot";
global.title = "Saitama-Bot by Gabutc_exploitz"
global.sgc = "https://chat.whatsapp.com/";
global.isPairing = true; //Mau pake pairing? true = idup, false = mati
global.sig = "https://chat.whatsapp.com/";
global.swa = "wa.me/6288211118394";
global.version = "1.0";
global.access_denied = "https://manybackgrounds.com/images/high/saitama-face-meme-20yu3ffvjiagme8l.webp";

global.wm = "Gabutc WhatsApp";
global.done = "```©Saitama-Bot```";
global.icon = "https://manybackgrounds.com/images/high/saitama-face-meme-20yu3ffvjiagme8l.webp";
global.fla = "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=";
global.wait = "```Tunggu Sebentar⌛```";
global.eror = "`! Error Command Failed`";
global.packname = "Saitama-Bot";
global.author = "Saitama-Bot by Gabutc_exploitz";

//Ini Isi pakai video & poto lu
global.gif = "https://s1.zerochan.net/Saitama.600.2647462.jpg"; 
global.thumb = "https://manybackgrounds.com/images/high/saitama-face-meme-20yu3ffvjiagme8l.webp";
global.multiplier = 45;
global.sourceurl = '....'

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: "✉️",
      money: "💵",
      potion: "🥤",
      diamond: "💎",
      common: "📦",
      uncommon: "🎁",
      mythic: "🗳️",
      legendary: "🗃️",
      pet: "🎁",
      sampah: "🗑",
      armor: "🥼",
      sword: "⚔️",
      kayu: "🪵",
      batu: "🪨",
      string: "🕸️",
      kuda: "🐎",
      kucing: "🐈",
      anjing: "🐕",
      petFood: "🍖",
      gold: "👑",
      emerald: "💚",
    };
    let results = Object.keys(emot)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string));
    if (!results.length) return "";
    else return emot[results[0][0]];
  },
};

const Jimp = require('jimp');
const fetch = require('node-fetch');

let resizeThumb =  resize(thumb, 300, 250)
global.Thumbnails = resizeThumb;

/*====[ FAKE THUMBNAIL ACCESS DENIED ]======*/

global.danied = {
  contextInfo: {
    mentionedJid: [],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363198449115557@newsletter',
      newsletterName: "FOLLOW ME ON CHANNEL",
      serverMessageId: -1
    },
    forwardingScore: 256,
    externalAdReply: {
      title: `UPSS!! AKSES DITOLAK`,
      body: null,
      thumbnailUrl: access_denied,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}

/*========[ GLOBAL ADREPLY ]============*/
global.adReply = {
  contextInfo: {
    mentionedJid: [],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363198449115557@newsletter',
      newsletterName: "FOLLOW ME ON CHANNEL",
      serverMessageId: -1
    },
    forwardingScore: 256,
    externalAdReply: {
      title: `Aku  Saitama-Bot`,
      body: wm,
      thumbnailUrl: thumb,
      sourceUrl: "",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}

/*=========[ FAKE IG ( SMALL AD REPLY ) ]==============*/

global.fakeig = {
  contextInfo: {
    mentionedJid: [],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363198449115557@newsletter',
      newsletterName: "FOLLOW ME ON CHANNEL",
      serverMessageId: -1         
    },
    forwardingScore: 256,
    externalAdReply: {
      title: `Aku Saitama-Bot`,
      body: wm,
      thumbnailUrl: icon,
      sourceUrl: "",
      mediaType: 1,
      renderLargerThumbnail: false
    }
  }
}

async function resize(url, width, height, referer = null) {
  try {
    const fetchOptions = {
      redirect: 'follow',
      headers: {},
    };

    if (referer) {
      fetchOptions.headers['Referer'] = referer;
    }

    const response = await fetch(url, fetchOptions);

    if (response.ok) {
      const finalUrl = response.url;
      const arrayBuffer = await response.arrayBuffer();
      return await Jimp.read(Buffer.from(arrayBuffer)).then(image => image.resize(width, height).getBufferAsync(Jimp.MIME_JPEG));
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error.message);

    try {
      const undiciFetchOptions = {
        redirect: 'follow',
        headers: {},
      };

      if (referer) {
        undiciFetchOptions.headers['Referer'] = referer;
        }

      const arrayBuffer = await undiciFetch(url, undiciFetchOptions).then(response => response.arrayBuffer());
      return await Jimp.read(Buffer.from(arrayBuffer)).then(image => image.resize(width, height).getBufferAsync(Jimp.MIME_JPEG));
    } catch (retryError) {
      console.error('Retry Error:', retryError.message);
      return Buffer.from([]);
    }
  }
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

let fs = require('fs');
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update settings.js");
  delete require.cache[file];
  require(file);
});