// 문제 링크: https://leetcode.com/problems/reverse-linked-list/

/**
 * 접근법
 * - 이전 노드를 가리키는 prev와 현재 노드를 가리키는 current를 선언한다.
 * - current가 null이 될 때까지 순환한다.
 *
 * 테스트 1 〉 통과 (56ms, 51.96MB)
 * 테스트 2 〉 통과 (58ms, 51.40MB)
 */
function solution(head) {
  let prev = null
  let current = head

  while (current) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}

// 큐보다 링크드 리스트가 먼저 선행되어야 했던 것 같다.
// 이미 상위 문제를 풀었기에 훨씬 쉬워졌다 음음.
module.exports = { solution }
