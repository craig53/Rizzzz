//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "263776821766";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUxaTFFuYWxiTjlUTm1XSDNoZWxFTFovWTYzRGpaSVZ2VGcyYkRTTTIyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXlzNWpLYVhtQUFGUGNJa3Q4bFFydFZyUWJuc3FaOU1uUlI5RTZmSTFGZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2QTRacWN2cnFnZFdQZ3lLMEdpc1lNd3hkRWRYL3FRME0rYW1pa0o1ZkVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjWUhKdWRnWGFFVjNnenMrWGxNa1VJVzM2UWJyY3lPQWJKK3R2R1l6Q1JZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Ha1JRL2lob0gzUmN2SFdKUnJTU2lTa1EzSDZRMktzNTNkVURpUjFna0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5hcjdxVUpCZnA3K3ZSUkdYYThKaWIwREd3ak5GajhDbzFrUDc5M1VSMG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0RmVmR2bzNsdkdrVFBqMHA0Q2I4QlAvUGlvZjJzV3F0a0llbFlmMjRIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUG82bm5PNEdrRW5EOFZlR2xIVnY2SHI2dks0RTluUi8rL1pjVElXL09IZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQzZ3lhUWtIZEZxMkNxVHRhRWJzM3lZd0ZZaEx0dS9GQlFBbXE0SnkxTnhIUlRkSnZETW43ZS93MjIxTndHRG91VWFVN3k4b0xYdjI3bE9SVmNLckNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoiMGNyTUUzUXRyaWx4dTlCSWFFUytLbzB0ejI1aWkxU0hLZzFlMmp3TEZFST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3NzY4MjE3NjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOThGOUVEOUFDMzEyQUFCOEYyRDQ1QjE2MTMwQzNBNjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjI0NzA4NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzc2ODIxNzY2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc5M0JGNDkyNTczNkY5RTZCNkExQzc1QTU3NkVDOTZGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjYyNDcwODV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InVFOWlIR1VSUUZlT1F0UHZUdkdFcVEiLCJwaG9uZUlkIjoiMjQ5M2NmNTYtODFiMS00ZDA5LTgwYWEtYTc4YTE3Y2VkOTM3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFuN29RRlBnKzh6MTJGNUZ0QlVOSzdRWTdJND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1RTFxS3hhWWpVTWswNWNnRUFzd3FleUVBcE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQU45WVZMQVEiLCJtZSI6eyJpZCI6IjI2Mzc3NjgyMTc2NjozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlJpZGRsZXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09MQnpud1FuT0dSdHdZWUF5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImtHRXZQdDY3aGxUQWpucEJKeFduZmJJblA1bEF5MHpENEh6Y3JPR3V4Qnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkF6N1pHdldqdmVKaWR1aVdnZUo0U2R0OURxK2N2SzZNWGF0MExZaTdYVWcxTWdyR0Jyb2FZUWFOZXdvZTVGMFZ2TitqN2poZWg4dWlJbDZvWnNnNUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCTGFuRTVyTmdmK2U4Z0VSMi9KeThkMFJXZmw4bWpVSlJjQUJQaFZqdDR3d3N4TXJ2OUUyQTF4TGZQSGlhMnF5cVFqOTgweUN5b0Y1S1NiZld0YVVCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc3NjgyMTc2NjozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpCaEx6N2V1NFpVd0k1NlFTY1ZwMzJ5SnorWlFNdE13K0I4M0t6aHJzUWMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjYyNDcwODEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQkt6In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "Riddler",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
