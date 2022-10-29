class HashTable {
    constructor(size = 7) {
      this.dataMap = Array(size);
    }
  
    _hash(key) {
      let hash = 0;
  
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
      }
  
      return hash;
    }
  
    set(key, value) {
      const index = this._hash(key);
      if (!this.dataMap[index]) {
        this.dataMap[index] = [];
      }
  
      this.dataMap[index].push([key, value]);
    }
  
    get(key) {
      const index = this._hash(key);
  
      if (this.dataMap[index]) {
        for (let i = 0; i < this.dataMap[index].length; i++) {
          if (this.dataMap[index][i][0] === key) {
            return this.dataMap[index][i][1];
          }
        }
      }
  
      return undefined;
    }
  
    keys() {
      let allkeys = [];
      for (let i = 0; i < this.dataMap.length; i++) {
        if (this.dataMap[i]) {
          for (let j = 0; j < this.dataMap[i].length; j++) {
              allkeys.push(this.dataMap[i][j][0])
          }
        }
      }
  
      return allkeys;
    }
  }
  
  let myHashTable = new HashTable();
  myHashTable.set("lumber", 70);
  myHashTable.set("washers", 50);
  myHashTable.set("bolts", 1400);
  
  myHashTable.get("washers");
  
  myHashTable.keys()
  