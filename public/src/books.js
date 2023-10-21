function findAuthorById(authors, id) {
  // return null if authors is not valid
  if(!authors) return null;

  // find author using the arrow function
  return authors.find(auther => auther.id === id);
}

function findBookById(books, id) {
  // return null if books is not valid.
  if(!books) return null;

  // return null if book not found for a given id.
  let foundBook = null;

  // find book using for loop, this can be accomblish using the native array.find method.
  for(let index = 0; index < books.length; index++) {

    if(books[index].id === id) {
      // book found
      foundBook = books[index];
      break;
    }
  }

  return foundBook;
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
