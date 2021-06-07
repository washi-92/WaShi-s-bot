const { Message } = require("discord.js");

module.exports = {
    run: Message => Message.channel.send("bonjour à toi"),
    name: "bjr"
}