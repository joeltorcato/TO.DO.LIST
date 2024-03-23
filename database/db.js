const mongoose = require('mongoose');

const connectToDb = () => {
  mongoose.connect(
    "mongodb+srv://adiministrador:QPMZwonx1209_@list.aocbjhz.mongodb.net/?retryWrites=true&w=majority&appName=LIST",
    {
      useNewUrlParser: true,
      userUnifiedTopology: true,

    }
  ).then(() => console.log("conectado")
  ).catch((err) => console.log(err));
}

module.exports = connectToDb;