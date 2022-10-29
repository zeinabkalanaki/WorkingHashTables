class HashTable {
  constructor() {
    this.size = 1000;
    this.products = Array(this.size).fill(null);
  }

  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }

    return hash % this.size;
  }

  set(key, value) {
    const hashKey = this.hash(key);

    this.products[hashKey] = value;
  }

  get(key) {
    const hashKey = this.hash(key);

    return this.products[hashKey];
  }
}

function findFirstRepeativeCharWithHashTable(str) {
  //const table = {}; // empty object
  const table = new HashTable();

  for (let ch of str) {
    if (table.get(ch)) return ch;
    table.set(ch,1)
  }
}

console.log(findFirstRepeativeCharWithHashTable("hello world"));
