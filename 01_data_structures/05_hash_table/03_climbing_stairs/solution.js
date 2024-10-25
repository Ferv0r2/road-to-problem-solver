// 문제 링크: https://leetcode.com/problems/climbing-stairs/description/

/**
 * 접근법
 * - 피보나치 수열과 같은 규칙을 가진다.
 * - 동적 계획법을 사용하면 된다.
 *
 * 테스트 1 〉 통과 (0ms, 49.13MB)
 * 테스트 2 〉 통과 (0ms, 48.98MB)
 */

/**
 * @param {number} n
 * @return {number}
 */
function solution1(n) {
  const dp = [0, 1, 2]

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}

/**
 * 다른 풀이 - 해시 테이블
 * - 동적 계획법과 같은 방식으로 풀이한다.
 * - 해시 테이블을 사용하여 중복 계산을 줄인다.
 *
 * 테스트 1 〉 통과 (0ms, 49.25MB)
 * 테스트 2 〉 통과 (0ms, 48.65MB)
 */
function solution2(n) {
  const hashTable = { 1: 1, 2: 2 }

  const recursion = (n) => {
    if (hashTable[n]) return hashTable[n]

    hashTable[n] = recursion(n - 1) + recursion(n - 2)

    return hashTable[n]
  }

  return recursion(n)
}

module.exports = { solution1, solution2 }
