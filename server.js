const express = require('express');
const app = express();
const port = 8888;
const cors = require('cors');

const cart_items = require('./routes/cart-items');

app.use(express.json());
app.use(cors());
app.use('/', cart_items);





app.listen(port, () => console.log(`server is running on port: ${port} `));