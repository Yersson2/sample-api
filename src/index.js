const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
})