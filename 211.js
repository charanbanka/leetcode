
var WordDictionary = function () {
    this.root = { children: {}, isEndOfWord : false }
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this.root;
    for (let char of word) {
        if (!node.children[char])
            node.children[char] = { children: {}, isEndOfWord : false }

        node = node.children[char];
    }
    node.isEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word, node = this.root) {

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (char == ".") {
            for (let key of Object.keys(node.children || {})) {
                let res = this.search(word.slice(i + 1), node.children[key])
                if (res) return true
            }
        }
        else if (node && !node.children[char]) return false
        node = node.children[char];
    }
    return node.isEndOfWord;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

let wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True