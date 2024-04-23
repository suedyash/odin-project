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



function addToBooksArray() {

}

// execute after DOM loads...
document.addEventListener('DOMContentLoaded', function() {
  // const newBookBtn = document.getElementById("new-book");
  // const rmBookBtn = document.getElementById("remove-book");
  
  const colTitle = document.getElementById("col-title");
  const colAuthor = document.getElementById("col-author");
  const colPages = document.getElementById("col-pages");
  const colStatus = document.getElementById("col-status");

  let readStatus = "";

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
      checkbox.setAttribute("type", "checkbox");
      checkbox.classList.add("checkbox");
      newStatus.appendChild(checkbox);
      if (book.readStatus == true) {
        checkbox.checked = true;
        readStatus = "read";
        console.log(readStatus);
      } else if (book.readStatus == false) {
        checkbox.checked = false;
        readStatus = "not read yet";
        console.log(readStatus);
      }
    });
  }
  addToLibrary();

  // change read status depending on checkbox tick
  const checkbox = document.querySelectorAll(".checkbox");

  /*
  function handleReadStatus() {
    checkbox.forEach(box => (addEventListener('click'), function() {
      if (box.checked == true) {
        box.checked = false;
        readStatus = "not read yet";
        console.log(readStatus);
      } else if (box.checked == false) {
        box.checked = true;
        readStatus = "read";
        console.log(readStatus);
      }
    }));
  }
  handleReadStatus();
  */


  

});
