// adding some books by default
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const book2 = new Book('The Parasitic Mind', 'Gad Saad', 235, true);

const booksArray = [book1, book2];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

// execute after DOM loads...
document.addEventListener('DOMContentLoaded', function() {
  const colTitle = document.getElementById("col-title");
  const colAuthor = document.getElementById("col-author");
  const colPages = document.getElementById("col-pages");
  const colStatus = document.getElementById("col-status");

  function addToLibrary() {
    booksArray.forEach(book => {
      const newTitle = document.createElement("span");
      newTitle.appendChild(document.createTextNode(book.title));
      colTitle.appendChild(newTitle);
      
      const newAuthor = document.createElement("span");
      newAuthor.appendChild(document.createTextNode(book.author));
      colAuthor.appendChild(newAuthor);

      const newPages = document.createElement("span");
      newPages.appendChild(document.createTextNode(book.pages));
      colPages.appendChild(newPages);

      const newStatus = document.createElement("span");
      colStatus.appendChild(newStatus);

      // handle styling for Read Status
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = book.readStatus;
      newStatus.appendChild(checkbox);
      
      checkbox.addEventListener('change', function() {
        checkbox.checked ? book.readStatus = true : book.readStatus = false;
      })
    });
  }
  addToLibrary();

  // add New books to Library
  function addToBooksArray() {

  }
});
