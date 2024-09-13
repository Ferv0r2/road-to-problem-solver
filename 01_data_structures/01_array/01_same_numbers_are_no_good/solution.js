// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12906

/**
 * 접근법
 * 1. 배열을 순회하면서 이전 값과 현재 값을 비교한다
 * 2. 이전 값과 현재 값이 다르면 새로운 배열에 추가한다.
 *
 * 주의사항
 * - Set을 사용하면 중복을 제거할 수 있지만, 순서가 보장되지 않는다.
 */

/**
 * Solution 1: reduce 메서드로 해결하기
 * -> 효율성 테스트 3번 실패, Solution 2보다 훨씬 느린 것을 볼 수 있다.
 * -> 정확성 테스트에서는 0.05 ~ 0.06ms로 Solution 2보다 빨랐다.
 *
 * 테스트 1 〉	통과 (66.51ms, 83.1MB)
 * 테스트 2 〉	통과 (66.32ms, 82MB)
 * 테스트 3 〉	실패 (시간 초과)
 * 테스트 4 〉	통과 (68.21ms, 83.3MB)
 */
function solution1(arr) {
  return arr.reduce((acc, cur) => {
    // 1. 현재 배열(acc)의 마지막 값과 현재 값(cur)이 다르거나
    // 2. acc가 비어있을 경우
    // -> 새로운 배열에 추가한다.
    if (acc.at(-1) !== cur || acc.length === 0) {
      acc.push(cur)
    }
    return acc
  }, [])
}

/**
 * Solution 2: for...of 문으로 해결하기
 *
 * 테스트 1 〉	통과 (28.11ms, 90.8MB)
 * 테스트 2 〉	통과 (28.44ms, 90.7MB)
 * 테스트 3 〉	통과 (26.87ms, 90.6MB)
 * 테스트 4 〉	통과 (27.94ms, 91.2MB)
 */
function solution2(arr) {
  const result = []
  let prev = null // 이전 값을 저장할 변수

  for (let item of arr) {
    if (item !== prev) {
      result.push(item)
      prev = item
    }
  }

  return result
}

/**
 * Solution 3: map과 filter 메서드로 해결하기
 *
 * 테스트 1 〉	통과 (68.71ms, 77.8MB)
 * 테스트 2 〉	통과 (66.77ms, 78.2MB)
 * 테스트 3 〉	통과 (50.05ms, 78.4MB)
 * 테스트 4 〉	통과 (51.81ms, 78.1MB)
 */
function solution3(arr) {
  let prev = null // 이전 값을 저장할 변수
  return (
    arr
      .map((v) => {
        if (v === prev) return false
        prev = v
        return v
      })
      // 0은 false와 같이 필터링에 Number.isInteger로 숫자만 필터링한다. (JavaScript가 미안해)
      .filter((v) => Number.isInteger(v))
  )
}

/**
 * 결론
 * Solution 2가 가장 빠르고 효율적이다.
 * 때로는 reduce, map, filter 등 고차함수보다 근본 for문이 더 빠를 수 있다.
 */
module.exports = { solution1, solution2, solution3 }
