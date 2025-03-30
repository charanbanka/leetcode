function Node(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var AllOne = function () {
  this.addrMap = new Map();
  this.freqMap = new Map();
  this.minFreq = 0;
  this.maxFreq = 0;
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
  if (typeof key !== "string") return; // Basic input validation

  let cur = this.addrMap.get(key);
  if (cur) {
    let freq = cur.val.freq;
    this.removeNode(cur, freq, this.freqMap.get(freq));
    freq++;
    cur.val.freq = freq;
    this.addNode(cur, freq, this.freqMap.get(freq) || {});
  } else {
    let newNode = new Node({ freq: 1, key });
    this.addrMap.set(key, newNode);
    this.addNode(newNode, 1, this.freqMap.get(1) || {});
    if (this.minFreq === 0) this.minFreq = 1;
  }

  // Update maxFreq
  this.maxFreq = Math.max(this.maxFreq, cur?.val.freq || 1);

  // Update minFreq if necessary
  if (this.freqMap.size === 1) {
    this.minFreq = cur?.val.freq || 1;
  }
};

/**
 * @param {string} key
 * @return {void}
 */

AllOne.prototype.dec = function (key) {
  // Check if key exists
  let cur = this.addrMap.get(key);
  if (!cur) return; // If key doesn't exist, do nothing

  let freq = cur.val.freq;
  // Remove node from current frequency list
  this.removeNode(cur, freq, this.freqMap.get(freq));

  // Decrease frequency
  freq--;
  if (freq > 0) {
    // Update frequency and add to new frequency list
    cur.val.freq = freq;
    this.addNode(cur, freq, this.freqMap.get(freq) || {});
  } else {
    // Remove key from addrMap when frequency becomes 0
    this.addrMap.delete(key);
  }

  // Update min and max frequencies
  if (this.addrMap.size === 0) {
    this.minFreq = 0;
    this.maxFreq = 0;
  } else {
    this.updateMinMaxFreq();
  }
};
AllOne.prototype.removeNode = function (cur, freq, list) {
  let { head = null, tail = null } = list || {};

  if (!head) return;

  if (cur === head && cur === tail) {
    this.freqMap.delete(freq);
  } else if (cur === head) {
    head = head.right;
    if (head) head.left = null;
    this.freqMap.set(freq, { head, tail });
  } else if (cur === tail) {
    tail = tail.left;
    if (tail) tail.right = null;
    this.freqMap.set(freq, { head, tail });
  } else {
    cur.left.right = cur.right;
    cur.right.left = cur.left;
    this.freqMap.set(freq, { head, tail });
  }

  cur.left = null;
  cur.right = null;

  if (!this.freqMap.get(freq)?.head) {
    this.freqMap.delete(freq);
  }

  // Update min/max freq needs to be handled in calling function
};

AllOne.prototype.addNode = function (
  cur,
  freq,
  { head = null, tail = null } = {}
) {
  // Ensure node's pointers are clean
  cur.left = null;
  cur.right = null;

  if (!head) {
    // Empty list case
    head = cur;
    tail = cur;
  } else {
    // Add to end of existing list
    tail.right = cur;
    cur.left = tail;
    tail = cur;
  }

  // Update freqMap
  this.freqMap.set(freq, { head, tail });

  // Update maxFreq
  this.maxFreq = Math.max(this.maxFreq, freq);

  // Only update minFreq if it was 0 or this is a smaller non-zero frequency
  if (this.minFreq === 0 || (freq < this.minFreq && freq > 0)) {
    this.minFreq = freq;
  }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  if (this.maxFreq > 0) {
    return this.freqMap.get(this.maxFreq)?.head?.val?.key || "";
  }
  return "";
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  if (this.minFreq > 0) {
    return this.freqMap.get(this.minFreq)?.head?.val?.key || "";
  }
  return "";
};

AllOne.prototype.updateMinMaxFreq = function () {
  if (this.addrMap.size === 0) {
    this.minFreq = 0;
    this.maxFreq = 0;
    return;
  }

  const freqs = Array.from(this.freqMap.keys());
  this.minFreq = Math.min(...freqs);
  this.maxFreq = Math.max(...freqs);
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
