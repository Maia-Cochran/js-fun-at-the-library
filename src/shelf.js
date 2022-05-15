function shelfBook(book, shelf) {
  if (shelf.length < 3)
  shelf.unshift(book);
};

function unshelfBook(bookTitle, shelf) {
 for (var i = 0; i < shelf.length; i++) {
   if (bookTitle === shelf[i].title) {
      shelf.splice(i, 1);
  }
 }
};

//when the book === the current shelf[i].name, remove the book
//we have the book title which is a string
// that is stored in a key value pair in book object
// the book object is stored in the shelf array
//if we find the index position of the book object,
// we can remove it from the array

function listTitles(shelf) {
  var titles = []
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title)
  }
  return titles.join(", ")
};

function searchShelf(shelf, title) {
  var result
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      result = true
    } else {
      result = false
    }
  }
return result
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
