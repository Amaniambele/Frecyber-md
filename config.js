//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "255620814108,255764182801,255776663848,255752593977";
global.sudo = process.env.SUDO || "255620814108,255764182801,255776663848,255752593977";
global.owner = process.env.OWNER_NUMBER || "255696497709,255696497709,255696497709,255752593977";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0ltWUpHbHRxNEgwc3A5K0VaNEJMNWpkVFRsLzlISERXOERVdEtiV1QxUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEkwajhvb2ZDbVk2Q2pvOFNiWXRKK0Z3NlpGUW1BTmpjcldkVGNNK0Vndz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SU40WTRMWUV1b1EwNUh4OFFvYmlWQ0xRRklzU21PcFNkRGJpWXRqQldRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSNlMxSmJ1cTh0OG1pNXNaNVlDTUUvc2tPOExRSVI3ZG9TUzJwWmpLREFZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JemZmUVF1ZEJGY0wvTHZoTVJ1MFNxVGJxMHVtWHhBL2pVUnc4aGZ4MzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZFZHlERTJCaTVrYXY5eXA3WVJhSUJPZk5LUkQvL2tNZW9TYjB3UE9ld1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0xrNS9CdWdqK3MybVFhYzZmZzRBSzZLbTNHbTdvNXNmOFFuaHcvWEpYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWE4rRnRxSjFNdERVbEVXQmwxV0VtTjRIMDNTSWM5NCs2QU5pTkcyQTV3TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5YdkMxMmNTVXJGd010dGo1SzJJUTZ6WUp5d085L0cyNFljdkNJMUE1c1NCRE9kK0NURUVZQXk4Y29ZL2E3amV6Ny8zMXNRellMZWNDWGlvQjkzVUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiJ2cWxZekhJSGtKRHU0M2UxU2xSTnhyd1daM0xJb0J0cDgySzFGaU5TWERRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIMkFoSFpmd1JBdUMxN2Q4Y0t3T2RRIiwicGhvbmVJZCI6IjgyNjhkOTk4LTlmMGItNDM3Yi1hMjdiLTY2YzMwNDhmMTgxMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4L1h6eUdhN3U0U3lrZ2hJbVlicUZoWHRHMkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmtMRGNIcUo0dDR1aXJja1djampFSkd1VlN3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpEWU5LTEEzIiwibWUiOnsiaWQiOiIyNTU2OTY0OTc3MDk6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQTEgUGhvdG9ncmFwaGVyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPRFZnWndDRUpMMHRiWUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOeDdhYm1jTVhqaTdNS0daQVFWdFBRc3RQaG95c0h2T3dXMnlWSkZCREg0PSIsImFjY291bnRTaWduYXR1cmUiOiJGOWluNlVad3ROQTJqQTI4YVdsUFNrSmJrc0NPMHBZK1lKUU02ZkJ5RXUyMlFhNkRiREF5ZFBEWEl6bUdmQ3R5cENvQ0taTVJsZUhvS0ZMUS9nbHpBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieWo2ejhndzhHam93ZFM4cjNNc0svUm9qMm0yZjZlRkYxNllOL0FkR3Awa2I1eGdRU25Ha0s1UlhnbXFBaHlXUzFCaDVkeG5xWGVUaU1NNnJ1ODE5Q0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU2OTY0OTc3MDk6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGNlMm01bkRGNDR1ekNobVFFRmJUMExMVDRhTXJCN3pzRnRzbFNSUVF4KyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDc0MjE3NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLczMifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "@",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐅𝚪𝚵𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  author: process.env.PACK_AUTHER || "FRECYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FRECYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "FRECYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
