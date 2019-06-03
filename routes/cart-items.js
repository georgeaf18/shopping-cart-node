const express = require('express');
const cart = express.Router();

const items = [
    {id: 1, product: 'Orange', price: 6.78, quantity: 12},
    {id: 2, product: 'Milk', price: 2.65, quantity: 3},
    {id: 3, product: 'Steak', price: 9.98, quantity: 2},
    {id: 4, product: 'Water Bottles', price: 3.62, quantity: 4},
    {id: 5, product: 'Spaguetti', price: 2.23, quantity: 2}
];

cart.get('/', (req,res) => {
    res.json({data: items});

});

cart.post('/', (req, res) => {
    const upperName = req.body.name.toUpperCase();
    res.send({data: upperName});
    console.log(req.body);
});

cart.put('/:id', (req, res) => {
    console.log(req.params.id ,res.body);
});

cart.delete('/:id', (req, res) => {
    console.log(req.params.id);
});

module.exports = cart;