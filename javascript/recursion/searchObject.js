/*
  Write a function called contains that searches for a value in a nested object. It returns true if the
  object contains that value.
*/

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2'
          }
        }
      }
    }
  }
}

function contains(obj, searchValue) {
  if (typeof obj !== 'object' || obj === null) {
    return obj === searchValue;
  }

  for (const value of Object.values(obj)) {
    if (contains(value, searchValue)) {
      return true;
    }
  }
  return false;
}

const hasIt = contains(nestedObject, 44);
console.log(hasIt);
const doesntHaveIt = contains(nestedObject, "foo");
console.log(doesntHaveIt);