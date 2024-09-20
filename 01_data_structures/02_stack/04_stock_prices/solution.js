// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42584?language=javascript

/**
 * Solution
 *
 * 접근법
 * 1. prices와 동일한 길이의 배열을 생성한다.
 * 2. i번째 요소부터 마지막 요소까지 순회하면서 prices[i]보다 작은 값이 나올 때까지 result[i]를 증가시킨다.
 *
 * 테스트 1 〉 통과 (24.39ms, 43.4MB)
 * 테스트 2 〉 통과 (24.20ms, 41.7MB)
 * 테스트 3 〉 통과 (26.04ms, 43.7MB)
 * 테스트 4 〉 통과 (23.00ms, 42MB)
 * 테스트 5 〉 통과 (25.84ms, 41.9MB)
 */

function solution(prices) {
  const result = Array(prices.length).fill(0)
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      result[i]++
      if (prices[i] > prices[j]) break
    }
  }

  return result
}

module.exports = { solution }
