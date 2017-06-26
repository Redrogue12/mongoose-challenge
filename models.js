const mongoose = require('mongoose');

//Schema to represent a blog post
const blogSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String},
  author: {
    first_name: String,
    last_name: String
  },
  created: {type: Date, default: Date.now}
});

// Virtuals
// authorString returns the authors first and last name in a readable String
blogSchema.virtual('authorString').get(function() {
  return `${this.author.first_name} ${this.author.last_name}`.trim()
});

// instance method to represent a blog post

blogSchema.methods.apiRepr = function() {

  return {
    id: this._id,
    title: this.title,
    content: this.content,
    author: this.authorString,
    created: this.created
  };
}

// Call to model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = {Blog};
