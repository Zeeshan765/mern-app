const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/ProductRoute');
const userRoute = require('./routes/userRoute');

dotenv.config();
const port = process.env.PORT || 5000;
const DB = process.env.MONGO_URL;

//MongoDb  Connection
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database is Connected'))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

//Here Call the Routers
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/data', productRoute);

//Port Listening
app.listen(port, () => {
  console.log(`Backend is Running at ${port}`);
});
