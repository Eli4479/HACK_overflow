const express = require('express');
const env = require('dotenv');
const morgan = require('morgan');
const body_parser = require('body-parser');
const path = require('path');
// getting required modules and path


const connectDB = require("./server/database/connection")
// connecting database

const app = express();


env.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080
app.use(morgan('tiny'));
// mongodb connection
connectDB();
// adding port and database from env file for security reason


app.use(body_parser.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
// adding ejs css and js resources

// loading router
app.use('/', require('./server/routes/router'));


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});