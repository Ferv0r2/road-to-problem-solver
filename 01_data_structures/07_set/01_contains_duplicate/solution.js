// 문제 링크: https://leetcode.com/problems/contains-duplicate/description/

/**
 * 접근법
 *
 * - Set을 사용하여 중복된 요소가 있는지 확인한다.
 * - 중복된 요소가 있으면 false를 반환한다.
 * - 중복된 요소가 없으면 true를 반환한다.
 *
 * 테스트 1 〉 통과 (18ms, 62.72MB)
 * 테스트 2 〉 통과 (18ms, 60.02MB)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function solution(nums) {
  return new Set(nums).size !== nums.length
}

// 역대 최저 난이도!
module.exports = { solution }
