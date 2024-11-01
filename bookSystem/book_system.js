let books = [
  {name:'Pascals',authorName:'Jim Kary',bookDescription:'This Book is for technology',pagesNumber:20},
];
showbooks();
function addBook() {
  const bookName = document.getElementById('bookName').value;
  const authorName = document.getElementById('authorName').value;
  const bookDescription = document.getElementById('bookDescription').value;
  const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
  if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
      const book = {
          name: bookName,
          authorName: authorName,
          bookDescription: bookDescription,
          pagesNumber: pagesNumber
      };
      books.push(book);
      showbooks();
      clearInputs();
  } else {
      alert('Please fill in all fields correctly.');
  }
}

function showbooks() {
  const booksDiv = books.map((book, index) => `<h3>Book Number: ${index + 1}</h3>
      <p><strong>Book Name: </strong>${book.name}</p>
      <p><strong>Author Name:</strong> ${book.authorName}</p>
      <p><strong>Book Description:</strong> ${book.bookDescription}</p>
      <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>`
  );
  document.getElementById('books').innerHTML = booksDiv.join('');
}

function clearInputs() {
  document.getElementById('bookName').value = '';
  document.getElementById('authorName').value = '';
  document.getElementById('bookDescription').value = '';
  document.getElementById('pagesNumber').value = '';
}