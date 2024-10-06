// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12909

/**
 * Solution 1: 배열을 사용하여 해결하기
 *
 * 접근법
 * 1. '(' 이면 stack에 추가하고, ')'이면 stack에서 제거한다.
 * 2. stack이 비어있으면 true, 아니면 false를 반환한다.
 *
 * 테스트 1 〉 통과 (45.20ms, 38MB)
 * 테스트 2 〉 통과 (25.39ms, 38MB)
 */
function solution1(s) {
  const stack = []

  for (let char of s) {
    if (char === '(') {
      stack.push(char)
    } else {
      if (stack.length === 0) {
        return false
      }

      stack.pop()
    }
  }

  return stack.length === 0
}

/**
 * Solution 2: 배열을 선언하지 않고 해결하기
 *
 * 접근법
 * 1. ( 이면 1을 더하고, ) 이면 1을 뺀다.
 * 2. 결과가 0보다 작으면 false를 반환한다.
 * 3. 결과가 0이면 true를 반환한다.
 *
 * 메모리 사용량은 동일하지만 실행 시간이 훨씬 빠르다.
 * Solution 1처럼 실제로 배열을 선언하는 것보다 훨씬 빠른 것을 확인할 수 있다.
 *
 * 테스트 1 〉 통과 (4.72ms, 38.2MB)
 * 테스트 2 〉 통과 (4.76ms, 38.3MB)
 */

function solution2(s) {
  let result = 0

  for (let char of s) {
    result += char === '(' ? 1 : -1

    if (result < 0) {
      return false
    }
  }

  return result === 0
}

module.exports = { solution1, solution2 }
