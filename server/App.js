const express = require('express');
const mongoose = require('mongoose');
const List = require('./models/List');
const Card = require('./models/Card');

const app = express();


app.get("/", async (req, res) => {
    // const list = new List({
    //     title: "First list"
    // });
    // list.save().then(data => res.json(data))
    // List.find({title: 'First list'}).then(data => res.json(data)
    let cards = await Card.find({List : '60abb39c854d2c3c903e3aea'});
    res.json(cards);
});

app.get('/card', (req, res) => {
    const card = new Card({
        title: 'mySecond card',
        text: 'text of my second card',
        List: "60abb39c854d2c3c903e3aea",
    });
    card.save().then(data => res.json(data));
});

const start = async () => {
    try {
      await mongoose.connect('mongodb+srv://test123:test123@cluster0.yhfnu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
          useNewUrlParse: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
      });
        app.listen(8080, () => console.log(`App has been started on port 8080 ...`));
    }
    catch(e) {
        console.log(e);
    }
};
start();

