const express = require("express");
const emojiData = require("./db/emojis.json")


const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send({ success: true, message: "welcome to the emoji server" }));

app.get(`/emojis`, (req, res) => res.json({ success: true, emojiData }));

app.get("/emojis/:emojiId", (req, res) => {
    const emojiId = +req.params.emojiId;

    const emoji = emojiData.filter((emoji_obj) => {
        return emoji_obj.id === emojiId;
    });

    res.send({ success: true, emoji });
});

app.post("/emojis", (req, res) => {
    const emoji = req.body.emoji;
    const newEmoji = { id: emojiData.length + 1, name, character };


    emojiData.push(newEmoji);
    res.send({ success: true, newEmoji });
});








app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);




