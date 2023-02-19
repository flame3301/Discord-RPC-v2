const { rpcx } = require("./rpcx.js")
const { data } = require("./data.js")
const Discord = require("discord.js-selfbot-v13")


data.forEach((value)=>{
  let client = new Discord.Client({ checkUpdate: false })
  
    client.login(value).catch((err) => {
      console.log("❌ : " + value + " : " + err.code)})

    client.on("ready", async () => {
      client.user.setActivity(rpcx)
      console.log("✅ : " + value + " : " + client.user.username)})
})
