function hash(key, tableSize) {
  let hashCode = 0;
  const primeNumber = 31;

  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  }

  hashCode = hashCode % tableSize;
  return hashCode;
}

class HashMap {
  //table = new Array(389);
  table = new Array(3);

  set(key, value) {
    const index = hash(key, this.table.length);
    if (this.table[index]) {
      this.table[index].push( [key, value] );
    } else {
      this.table[index] = [[key, value]];
    }
  }

  get(key) {
    const index = hash(key, this.table.length);

    if (!this.table[index]) {
      return null;
    }

    const entry = this.table[index].find(x => x[0] === key);
    if (entry) {
      return entry[1];
    } else {
      return null;
    }
  }

  has(key) {
    const index = hash(key, this.table.length);

    if (!this.table[index]) {
      return null;
    }

    const entry = this.table[index].find(x => x[0] === key);
    if (entry) {
      return true;
    } else {
      return false;
    }
  }

  remove(key) {

  }

  length() {

  }

  keys() {

  }

  values() {

  }

  entries() {
    return this.table;
  }

  clearAll() {

  }

}

const data = new HashMap();
data.set("firstName", "bob");
data.set("lastName", "tim");
data.set("age", 21);
data.set("dob", "17/04/2003");

console.log("Here is a list of all the entries:", data.entries());
console.log(data.get("firstName"));
console.log(data.get("lastName"));
console.log(data.get("age"));
console.log(data.get("dob"));
console.log("Has dob?:", data.has("name"));
