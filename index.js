// Import modules
const Express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

// Create application
const app = Express();

// App settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(Express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('ok');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
})