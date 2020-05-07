const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  // res.send('<h1>Hello from express!</h1>');
  // console.log(adminData.products);

  // Without templating engine:
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  const products = adminData.products;
  res.render('shop', { prods: products, docTitle: 'shop', path: '/' });
});

module.exports = router;