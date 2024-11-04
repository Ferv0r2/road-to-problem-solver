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
  // n이 3 이하인 경우는 미리 계산한다.
  const dp = [0, 1, 2]

  // n을 3부터 순회한다.
  for (let i = 3; i <= n; i++) {
    // 현재 index는 이전 두 수의 합이다.
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  // n번째 수를 반환한다.
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

  // 재귀 함수를 사용하여 해시 테이블에 저장된 값이 있으면 반환한다.
  const recursion = (n) => {
    if (hashTable[n]) return hashTable[n]

    // 해시 테이블에 저장된 값이 없으면 재귀 함수를 호출한다.
    hashTable[n] = recursion(n - 1) + recursion(n - 2)

    // n번째 수를 반환한다.
    return hashTable[n]
  }

  return recursion(n)
}

module.exports = { solution1, solution2 }
