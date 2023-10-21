function findAccountById(accounts, id) {
  // do nothing if accounts is not valid.
  if (!accounts) return accounts;

  // return undefined if account not found for a given id.
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  // do nothing if accounts is not valid.
  if (!accounts) return accounts;

  // sort account using the last name.
  return accounts.sort((account1, account2) => account1.name.last > account2.name.last ? 1 : -1);  
}

function getAccountFullNames(accounts) {
  // check if accounts is null/undefined
  if (!accounts) return null;

  const names = accounts.map((account) => {
    const {first, last} = account.name;
    return `${first} ${last}`;
  });

  return names;
}
// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
