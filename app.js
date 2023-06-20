const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/wikiDB');

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model('Article', articleSchema);

///////////////////////////// Request Targetting All Articles ///////////////////////////////

app
  .route('/articles')
  .get(function (req, res) {
    Article.find().then((articles, err) => {
      if (!err) {
        res.send(articles);
      } else {
        res.send(err);
      }
    });
  })
  .post(function (req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    newArticle.save().then((err) => {
      if (!err) {
        res.send('New article added');
      } else {
        res.send(err);
      }
    });
  })
  .delete(function (req, res) {
    Article.deleteMany().then((err) => {
      if (!err) {
        res.send('All articles deleted');
      } else {
        res.send(err);
      }
    });
  });

///////////////////////////// Request Targetting a Specific Article ///////////////////////////////
app
  .route('/articles/:articleTitle')
  .get(function (req, res) {
    Article.findOne({ title: req.params.articleTitle }).then((article, err) => {
      if (!err) {
        res.send(article);
      } else {
        res.send(err);
      }
    });
  })
  .put(function (req, res) {
    Article.replaceOne(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content }
    ).then((err) => {
      if (!err) {
        res.send('Article updated');
      } else {
        res.send(err);
      }
    });
  });

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
