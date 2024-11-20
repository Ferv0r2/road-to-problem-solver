// 문제 링크: https://leetcode.com/problems/longest-consecutive-sequence/description/

/**
 * 접근법
 * - Set을 사용하여 중복된 요소가 있는지 확인한다.
 * - Set에 있는 요소를 순회하면서 연속된 요소가 있는지 확인한다.
 * - 연속된 요소가 있으면 가장 긴 연속된 요소의 길이를 반환한다.
 * - 연속된 요소가 없으면 0을 반환한다.
 *
 * 주의사항
 * - O(n) 시간복잡도로 풀어야 한다.
 *
 * 테스트 1 〉 통과 (39ms, 73.67MB)
 * 테스트 2 〉 통과 (34ms, 72.25MB)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function solution(nums) {
  const numSet = new Set(nums)
  let longest = 0

  // Set에 있는 요소를 순회하면서 연속된 요소가 있는지 확인한다.
  for (const num of numSet) {
    // 해당 (정수-1) 값이 세트에 있으면 구간 내에 첫 번째 값이 될 수 없다.
    if (!numSet.has(num - 1)) {
      let currentNum = num
      let currentLongest = 1

      // 구간을 최대로 확장한다.
      while (numSet.has(currentNum + 1)) {
        currentNum += 1
        currentLongest += 1
      }

      // 가장 긴 연속된 요소의 길이를 반환한다.
      longest = Math.max(longest, currentLongest)
    }
  }

  return longest
}

module.exports = { solution }
