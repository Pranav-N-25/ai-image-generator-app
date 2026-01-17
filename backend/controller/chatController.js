

const chatController = (req, res) => {

    res.status(200).send(`ChatRoute UserName : ${req.query.username}`);
}

module.exports = chatController;