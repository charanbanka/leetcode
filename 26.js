/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let duplicate = [];

    let len = nums.length;
    let count = 1;
    if (len == 0) return []
    let j = 0;
    for (let i = 1; i < len; i++) {
        if (nums[i - 1] == nums[i]) {
            duplicate.push(i);
        } else {
            count++;
            if (j < duplicate.length) {
                nums[duplicate[j]] = nums[i];
                j++;
            }
        }

    }

    return count;

};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))