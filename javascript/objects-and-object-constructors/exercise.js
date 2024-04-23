// Example of a Constructor
/*
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const player1 = new Player('Steve', 'X');
console.log(player1.name);

const player2 = new Player('Suyash', 'O');
console.log(player2);
*/

/*

Exercise:
Write a constructor for making "Book" objects. We will revisit this in the project at the end of this lesson.
Your book objects should have the book's title, author, and the number of pages,
and whether or not you have read the book.

Put a function into the constructor that can report the book info like so:
        theHobbit.info(); // "The Hobbit by J.R.R. Toklien, 295 pages, not read yet"

Note: It is almost always best to return things rather than putting console.log() directly into the function. 
In this case, return the info string and log it after the function has been called:
        console.log(theHobbit.info());

*/

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = function() {
    if(readStatus == true) {
      return "read";
    } else if (readStatus == false) {
      return "not read yet";
    }
  }
  this.info = () => { return `${this.title} by ${this.author}, ${this.pages}, ${this.readStatus()}` };
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info());