var express = require('express');
var router = express.Router();
const formatDistance = require('date-fns').formatDistance;

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages, formatDistance });
});

// After a message is sent in /new, save it and redirect to index.
router.post('/new', function(req, res, next) {
  messages.push({
    user: req.body.user,
    text: req.body.text,
    added: new Date(),
  })
  res.redirect('/');
})

module.exports = router;
