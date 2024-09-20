// 문제 링크: https://leetcode.com/problems/valid-parentheses/description/

/**
 * 접근법
 *
 * 앞서 스택 1번 문제에서 풀었던 방식과 동일하다.
 * 차이점은 괄호 종류가 ( 뿐만 아니라 [와 {도 포함된다.
 */

/**
 * Solution
 *
 * 접근법
 * 1. 여는 괄호이면 스택에 추가한다.
 * 2. 닫는 괄호이면 스택에서 pop하여 짝이 맞는지 확인한다.
 * 3. 여는 괄호와 닫는 괄호의 짝이 맞지 않으면 false를 반환한다.
 * 4. 모든 괄호를 확인한 후 스택이 비어있으면 true, 아니면 false를 반환한다.
 *
 * 테스트 1 〉 통과 (58ms, 50.72MB)
 * 테스트 2 〉 통과 (50ms, 49.73MB)
 */

function solution(s) {
  const stack = []
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  for (let char of s) {
    if (brackets[char]) {
      stack.push(char)
      continue
    }
    // 닫는 괄호이면 스택에서 pop하여 짝이 맞는지 확인
    const last = stack.pop()
    if (brackets[last] !== char) {
      return false
    }
  }

  return stack.length === 0
}

module.exports = { solution }
