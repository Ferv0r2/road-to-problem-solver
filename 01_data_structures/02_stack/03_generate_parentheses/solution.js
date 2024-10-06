// 문제 링크: https://leetcode.com/problems/generate-parentheses/description/

/**
 * Solution: 백트래킹으로 해결하기
 *
 * 접근법
 * 1. n쌍의 괄호를 사용하여 만들 수 있는 모든 조합을 구한다.
 * 2. 열린 괄호 수가 n보다 작은 경우에 '('를 추가하고 재귀 호출한다.
 * 3. 닫힌 괄호 수가 열린 괄호 수보다 작은 경우에 ')'를 추가하고 재귀 호출한다.
 * 4. str의 길이가 n쌍 (n * 2)와 같아지면 result에 추가한다.
 *
 * 테스트 1 〉 통과 (42ms, 50.36MB)
 * 테스트 2 〉 통과 (49ms, 50.18MB)
 */

function solution(n) {
  const result = []

  const makePair = (str, open, close) => {
    if (str.length === n * 2) {
      result.push(str)
      return
    }

    if (open < n) {
      makePair(str + '(', open + 1, close)
    }

    if (close < open) {
      makePair(str + ')', open, close + 1)
    }
  }

  makePair('', 0, 0)

  return result
}

module.exports = { solution }
