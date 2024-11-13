// 문제 링크: https://leetcode.com/problems/kth-largest-element-in-an-array/description/

/**
 * 접근법 (이것을 원한 것이 아닐터... 그런데 통과는 시켜준다.)
 * -> Can you solve it without sorting?
 *
 * - 배열을 내림차순으로 정렬한다. (최대 힙)
 * - 이때, 0-based index이므로 k-1번째 요소를 반환한다.
 *
 * 테스트 1 〉통과 (88ms, 58.44MB)
 * 테스트 2 〉통과 (86ms, 58.46MB)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function solution1(nums, k) {
  // 배열을 내림차순으로 정렬
  nums.sort((a, b) => b - a)

  // k-1번째 요소 반환 (0-based index이므로 k-1)
  return nums[k - 1]
}

/**
 * 접근법
 *
 * - nums 배열에서 k개의 요소만 순회한다.
 * - k개의 요소를 k_largest 배열로 설정한다.
 * - nums 배열의 나머지 요소들을 순회한다.
 * - 현재 요소가 k_largest 배열의 최솟값보다 큰 경우, 대체한다.
 * - k_largest 배열의 최솟값을 반환한다.
 *
 * 테스트 1 〉실패 (Time Limit Exceeded)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function solution2(nums, k) {
  // 초기 k개의 요소를 k_largest 배열로 설정한다.
  const kLargest = nums.slice(0, k)

  // nums 배열의 나머지 요소들을 순회한다.
  for (let i = k; i < nums.length; i++) {
    const num = nums[i]
    const smallest = Math.min(...kLargest)

    // 현재 요소가 k_largest 배열의 최솟값보다 큰 경우, 대체
    if (num > smallest) {
      const index = kLargest.indexOf(smallest)
      kLargest.splice(index, 1) // 최솟값을 제거
      kLargest.push(num) // 새로운 요소 추가
    }
  }

  // k_largest 배열의 최솟값 반환
  return Math.min(...kLargest)
}

// 다른 답을 찾아보아야겠다.
module.exports = { solution1, solution2 }
