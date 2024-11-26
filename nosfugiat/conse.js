class HashTable {
  constructor() {
    this.table = {};
  }

  hash(key) {
    // Your hash function implementation here
  }

  add(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }
}

// Example usage
const myHashTable = new HashTable();
myHashTable.add("name", "John");
console.log(myHashTable.get("name")); // Output: John
