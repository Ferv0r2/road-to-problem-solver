// 문제 링크: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * 접근법
 * 1. 최대 이윤을 남기기 위해서는 가장 작은 값과 가장 큰 값을 알아야 한다.
 * 2. 이때, 가장 작은 값은 가장 큰 값보다 앞에 있어야 한다.
 * 3. 따라서, 배열을 순회하면서 이전 값과 현재 값을 비교하여 최대 이윤을 구한다.
 *
 * 주의사항
 * - 순서가 중요하여 단방향으로 흐르게 한다.
 */

/**
 * Solution 1: for문으로 해결하기
 *
 * 1. min은 가장 작은 값, max는 가장 큰 값으로 초기화한다.
 * 2. 배열을 순회하면서 min과 비교하여 가장 작은 값을 찾는다.
 * 3. min보다 큰 값이 나오면 max와 비교하여 최대 이윤을 구한다. *
 *
 * Submit 1: (58 ms, 58.86 MB)
 * Submit 2: (72 ms, 59.58 MB)
 */
function solution1(prices) {
  let min = Number.MAX_SAFE_INTEGER
  let max = 0

  for (const price of prices) {
    if (price < min) {
      min = price
    } else {
      max = Math.max(max, price - min)
    }
  }

  return max
}

/**
 * Solution 2: Two-pointer로 해결하기
 *
 * 1. left와 right 포인터를 사용하여 최대 이윤을 구한다.
 * 2. left 포인터는 right 포인터보다 작은 값이 나올 때마다 증가하고, right 포인터는 배열의 길이만큼 증가한다.
 * 3. left 포인터가 가리키는 값과 right 포인터가 가리키는 값을 비교하여 최대 이윤을 구한다.
 *
 * Submit 1: (78 ms, 58.87 MB)
 * Submit 2: (83 ms, 59.23 MB)
 */
function solution2(prices) {
  const size = prices.length
  let max = 0
  let left = 0
  let right = 1

  while (right < size) {
    if (prices[left] < prices[right]) {
      max = Math.max(max, prices[right] - prices[left])
    } else {
      left = right
    }
    right++
  }

  return max
}

module.exports = { solution1, solution2 }
