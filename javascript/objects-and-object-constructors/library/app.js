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

  function clearLibrary() {
    colTitle.innerHTML = '';
    colAuthor.innerHTML = '';
    colPages.innerHTML = '';
    colStatus.innerHTML = '';
  }

  function addToLibrary() {
    clearLibrary();
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

  /* add New books to Library */
  const formContainer = document.getElementById("form-container");
  formContainer.style.display = "none";

  const addBookBtn = document.getElementById("new-book");
  addBookBtn.addEventListener('click', function() {
    if (formContainer.style.display === "none") {
      formContainer.style.display = "block";
    } else if (formContainer.style.display === "block") {
      formContainer.style.display = "none";
    }
  });

  const bookForm = document.getElementById("book-form");
  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputTitle = document.getElementById("input-title");
    let inputAuthor = document.getElementById("input-author");
    let inputPages = document.getElementById("input-pages");
    let inputRead = document.getElementById("read");
    let inputNotRead = document.getElementById("notRead");

    let inputStatus;
    if (inputRead.checked == true) {
      inputStatus = true;
    } else if (inputNotRead.checked == true) {
      inputStatus = false;
    }

    let newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputStatus);
    booksArray.push(newBook);
    addToLibrary();
    bookForm.reset();
  });

  const exitFormBtn = document.getElementById("exitForm");
  exitFormBtn.addEventListener("click", function() {
    bookForm.reset();
    formContainer.style.display = "none";
  });

  /* remove Old Books from Library */
  const removeBookBtn = document.getElementById("remove-book");
  const removeBookContainer = document.getElementById("removeBookContainer");
  const exitRemoveBtn = document.getElementById("exitRemove");

  removeBookContainer.style.display = "none";

  removeBookBtn.addEventListener('click', function() {
    if (removeBookContainer.style.display === "none") {
      removeBookContainer.style.display = "flex";
      updateRemoveBookContainer();
    } else if (removeBookContainer.style.display === "flex") {
      removeBookContainer.style.display = "none";
    }
  });

  function updateRemoveBookContainer() {
    removeBookContainer.innerHTML = '';

    booksArray.forEach((book, index) => {
      const newDiv = document.createElement("div");
      const title = document.createTextNode(book.title);
       
      const removeBtn = document.createElement("button");
      removeBtn.classList.add('remove');
      removeBtn.innerHTML = 'Remove';
      removeBtn.onclick = function() {
        booksArray.splice(index, 1);
        updateRemoveBookContainer();
        addToLibrary();
      };
 
      newDiv.appendChild(title);
      newDiv.appendChild(removeBtn);
      removeBookContainer.appendChild(newDiv);
    });

    const exitRemoveBtn = document.createElement("button");
    exitRemoveBtn.id = "exitRemove";
    exitRemoveBtn.innerHTML = 'Go back?';
    exitRemoveBtn.onclick = function() {
      removeBookContainer.style.display = "none";
    }
    removeBookContainer.appendChild(exitRemoveBtn);
  }
});