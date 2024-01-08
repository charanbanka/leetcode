// A trie (pronounced "try") is a tree-like data structure that is used for storing a dynamic set or associative array where the keys are usually strings. The name "trie" comes from the word "retrieval," as the structure is designed to support efficient retrieval of a value associated with a given key.

// In a trie, each node represents a single character of a key. The root of the trie represents an empty string, and each path from the root to a leaf node represents a specific key. Each node in the trie may have links to its children, where each link represents a different character. Nodes may also store additional information, such as values associated with keys.

function TreeNode() {
  this.children = {};
  this.isEndOfWord = false;
}

function Trie() {
  this.root = new TreeNode();

  this.insert = function (word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TreeNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  };

  this.search = function (word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  };

  this.prefix = function (word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  };
}

let trie = new Trie();

trie.insert("cb");
trie.insert("c");
// trie.insert("vcb");

console.log(trie.root)

// console.log("trie=>", trie.search("cb"));
// console.log("trie=>", trie.search("cbv"));
// console.log("trie=>", trie.search("fcb"));
// console.log("trie=>", trie.search("cgb"));
// console.log("trie=>", trie.prefix("v"));
// console.log("trie=>", trie.prefix("x"));



