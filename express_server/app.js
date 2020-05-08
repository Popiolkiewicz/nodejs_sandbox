const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

// handlebars
app.engine('hbs', expressHbs({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'views')

// pug
// app.set('view engine', 'pug');
// app.set('views', 'views')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// request parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
  // With pug:
  res.status(404).render('page-not-found', { pageTitle: 'Page not found' });
});

app.listen(3000); 
