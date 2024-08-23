const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || o""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/68ab85fe183de156be48a.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Suhail²²¹-X-Whatsapp bot Beta!" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349118005963";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "True"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_46_08_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDUxLFxuICAgICAgICAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgODcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQwLFxuICAgICAgICA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDczLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDYwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4LFxuICAgICAgICA0NixcbiAgICAgICAgOCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDMzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUMkhROFVuV3hKYTNYVjduUUFkamxKc0lDMldTd0ZPQW1DZC94N1ViZko4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMTgwMDU5NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY4RDNERkVGREY4MkE3QTdENDUwRDhBMkI0NDNEQTFFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzk3MDc3NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItY0VQVmJ6NFRMT3BiaHNrOUItUlRRXCIsXG4gIFwicGhvbmVJZFwiOiBcImYwZGVhNTFhLTZjNjUtNDUzMC04OTE1LTUwZDUwMGVjNmNhYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDIxOCxcbiAgICAgIDE5OSxcbiAgICAgIDksXG4gICAgICAyLFxuICAgICAgNjgsXG4gICAgICAyMzcsXG4gICAgICA5MixcbiAgICAgIDQyLFxuICAgICAgMTMwLFxuICAgICAgMTYwLFxuICAgICAgMjAzLFxuICAgICAgNzMsXG4gICAgICA0NyxcbiAgICAgIDIyMixcbiAgICAgIDE4MCxcbiAgICAgIDEyNixcbiAgICAgIDEyLFxuICAgICAgMzMsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICA5OCxcbiAgICAgIDEzNyxcbiAgICAgIDIzLFxuICAgICAgMTE5LFxuICAgICAgMTU1LFxuICAgICAgNzEsXG4gICAgICAxNjYsXG4gICAgICAyNDAsXG4gICAgICAxNTUsXG4gICAgICA0NixcbiAgICAgIDExNSxcbiAgICAgIDE0OSxcbiAgICAgIDIzNixcbiAgICAgIDMwLFxuICAgICAgOTEsXG4gICAgICAyNDIsXG4gICAgICAxMTksXG4gICAgICAzOSxcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlSNVNGVkRGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTE4MDA1OTYzOjc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzMjkyOTk1MDQ5NDg2ODo3NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJSGlyWU1IRU0zcGhyWUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJGSHZtNWdEL3M4TFgrdmc4eEsvR0hJeThmeTB4bEdYS1hZTGVzOFZhbjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiakVldHY3NlJqdHRtaHVkSkhOWDl4TFBxUXdkTVhBbjJsdGdZYzA0dHA1MEYwQk02WDkrbk92eE4yRExoK2JrSlF5NHllb0FBbGlTNXhmZU5rMXo0QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaWhCL0p5N1NQQ0JwR0JDeDZ5cmlrUUg3cCtiUFJlcVV0bldJTlU0VUdKNHYycEdzTld3eWJSK3FySXBSOUh4L1Q2OU41bXJPSmo0by9MRlZuNHJGQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExODAwNTk2Mzo3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzk3MDc3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhCWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEJZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRk9iV1FQMUVtQlFMRkxvTmEyckFZbWRkVy9yR3Y4M09nS2Mya3RuWnJaYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODg2MDg5NDczLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjM5NzA2ODU4MTdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Tech hive",
  packname: process.env.PACK_NAME || "Tech Hive",
  botname : process.env.BOT_NAME  || "Suhail-X-Md",
  ownername:process.env.OWNER_NAME|| "Tech-Hive X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
