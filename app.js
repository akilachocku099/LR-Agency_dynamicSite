const express=require("express");
const app=express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const fs = require('fs');
console.dir(app);

const PORT = 4001;
app.use(bodyParser.json());

app.set('view engine','ejs')

const path=require('path');
app.set('views',path.join(__dirname,'/views'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


app.get('/services', (req, res) => {
    const productsPath = path.join(__dirname, 'public', 'products.json'); // Correct path to JSON file
    fs.readFile(productsPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading product data.');
        }
        
        let products;
        try {
            products = JSON.parse(data);
        } catch (parseError) {
            return res.status(500).send('Error parsing product data.');
        }

        console.log(products);  // Log products to ensure correct data
        res.render('products', { products });
    });
});
app.get('/services/:id', (req, res) => {
    const productId = req.params.id;
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading product data.');
        }
        const products = JSON.parse(data);
        const product = products.find(p => p.id == productId);
        if (product) {
            res.render('product', { product });
        } else {
            res.status(404).send('Product not found');
        }
    });
});
app.get('/cart', (req, res) => {
    res.render('cart');
});
app.get('/checkout', (req, res) => {
    res.render('checkout');
});

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs'); // Renders contact.ejs
});
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail service
    auth: {
        user: 'akilachocku099@gmail.com', // Your email
        pass: 'zzgw cqzv xpnl hexd' // Your app password or email password
    }
});

// Sample comments array (should be replaced with a database in production)
const comments = [];

// Route to handle comments
app.post('/comments', (req, res) => {
    const { username, email, message } = req.body;
    comments.push({ username, email, message });
    console.log(comments);

    const mailOptions = {
        from: 'akilachocku099@gmail.com', // Your email address
        to: 'jeon606060@gmail.com', // Replace with a valid recipient email address
        subject: 'New Comment Submitted',
        text: `A new comment was submitted by user ${username},email id ${email}:\n Their query is :\n${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        let responseMessage;
        if (error) {
            console.error('Error sending email:', error);
            responseMessage = 'Error sending the Query, please try again';
        } else {
            console.log('Email sent: ' + info.response);
            responseMessage = 'Your Query has been submitted. Our team will reach out to you shortly.';
        }
        res.render('back.ejs', { mes: responseMessage });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});

app.get('/search',(req,res)=>{
console.log(req.query)
const{q,r}=req.query;
})
app.get('*',(req,res)=>{
    res.render('home.ejs')
})
app.use((req,res) => {
    console.log("Hello papss! This is your Express server.");
    res.send("hello")
  });
  