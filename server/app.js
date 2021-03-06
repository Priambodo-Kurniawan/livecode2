var express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');

var indexRouter = require('./routes/index');
var moviesRouter = require('./routes/movie');
var rateRouter = require('./routes/rate');

var app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/movies', moviesRouter);
app.use('/rates', rateRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
