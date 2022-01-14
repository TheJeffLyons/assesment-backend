const messages2 = require(`./db.json`);
let messageID = 3;

module.exports = {
    getMessages: (req, res) => {res.status(200).send(messages2)
    },
    createMessage: (req, res) => {
        let {message} = req.body;

        let newMessage = {
            id: messageID,
            message,
        }
        messages2.push(newMessage);
        res.status(200).send(messages2);
        messageID++;
    }
}
