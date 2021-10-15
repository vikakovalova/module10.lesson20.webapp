const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine('hbs', exhbs({
    extname: 'hbs',
}));

app.get('/', (req, res) => {
    console.log('Это колбек для app.get("/")');
    // console.log(req.url);
    // res.send('Привет это /');
    res.render('home');
});

app.get('/about', (req, res) => {
    console.log('Это колбек для app.get("/about")');
    // console.log(req.url);
    // res.send('<h1>Привет это /about</h1>');
    res.render('about', { cssFileName: 'about', pageTitle: 'О нас'});
});

app.get('/products', (req, res) => {
    console.log('Это колбек для app.get("/products")');
    // console.log(req.url);
    // res.send('<h1>Привет это /about</h1>');
    res.render('products', { products, cssFileName: 'products', pageTitle: 'Наши продукты' });
});

app.get('/product/:productId', (req, res) => {
    console.log(req.params);

    const product = products.find(p => p.id === req.params.productId);
    
    res.render('product', {product})
})

app.listen(7777, () => {
    console.log(`Application server is running on port ${7777}`)
})