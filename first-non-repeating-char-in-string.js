function firstNonRepeateChar(s) {
  let keyFreqMap = new Map();
  let freqMap = new Map();
  for (let i = 0; i < s.length; i++) {
    let value = keyFreqMap.get(s[i])?.freq || 0;
    keyFreqMap.set(s[i], { index: i, freq: value + 1 });
    let set = freqMap.get(value) || new Set();
    if (set.size > 0) {
      set.delete(s[i]);
      freqMap.set(value, set);
    }
    let new_set = freqMap.get(value + 1) || new Set();
    new_set.add(s[i]);
    freqMap.set(value + 1, new_set);
  }

  let result = -1;

  let firstElement = "";
  for (let key of freqMap.get(1)) {
    firstElement = key;
    break;
  }

  if (firstElement) result = keyFreqMap.get(firstElement)?.index
  result = result >=0 ? result : -1
  console.log("result=>", result, keyFreqMap, freqMap);
  return result;
}

firstNonRepeateChar("ababcdfdgcgfd");
