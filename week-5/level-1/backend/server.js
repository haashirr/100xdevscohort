const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoURI = 'mongodb+srv://Haashir:microsoft@cluster0.f7r3yzl.mongodb.net/cards';

const cardSchema = new mongoose.Schema({
    name: String,
    description: String,
    socials: {
            linkedin: String,
            twitter: String
    },
    interests: [String]
});
const Card = mongoose.model('Card', cardSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/cards", async (req,res) => {
    const cards = await Card.find();
    res.json(cards);
});

app.post("/cards", async (req,res) => {
    const newCard = new Card(req.body);
    const savedCard = await newCard.save();
    res.status(201).json(savedCard);
})

app.put("/cards/:id", async (req,res) => {
    const card = await Card.findById(req.params.id);
    if(!card) {
        res.status(404).send('Card not found');
        return;
    }   
    card.set(req,body);
    const updatedCard = await card.save();
    res.json(updatedCard);
})

app.delete("/cards/:id", async (req,res) => {
    const deletedCard = await Card.findByIdAndDelete(req.params.id);
    if(!deletedCard) {
        return res.status(404).send('Card not found');
    }
    res.json({message: 'Card deleted'});
})

mongoose.connect(mongoURI).then(() => {
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    });
})

