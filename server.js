const mongoose = require('mongoose');

// import environmental variables from .env file
require('dotenv').config();

// connect to MongoDB
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// import all models
require('./models/Todo');

// start app
const app = require('./app');
app.listen(
  process.env.PORT,
  console.log(`Server is running on ${process.env.PORT} port`)
);
