const mongoose = require('mongoose'); 
const db = require('../models'); 

// This file empties are Blog collection and inserts the articles below

mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/reactbloglist'
); 

const blogSeed = [
  {
    title: 'How to Start a Minimalist Life', 
    author: 'John Wayne',
    summary:
      'This is how to start',
    date: new Date(Date.now()) 
  }, 
  {
    title: 'How to Declutter', 
    author: 'Joe Wayne',
    summary:
      'This is how to start',
    date: new Date(Date.now()) 
  }, 
  {
    title: 'How to Keep the Essentials', 
    author: 'Ryan Adams',
    summary:
      'This is how to start',
    date: new Date(Date.now()) 
  }
]; 

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(blogSeed))
  .then(data => {
    console.log(data.result.n + 'records inserted!'); 
    process.getMaxListeners(0); 
  })
  .catch(err => {
    console.error(err); 
    process.exit(1); 
  }); 
