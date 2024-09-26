// 문제 링크: https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

/**
 * 접근법
 * 1. Linked list의 'length - n'번째 노드를 삭제하는 문제
 * 2. [A, B, C]일 때, B를 삭제한다면 A.next = C가 되도록 해야 한다. (삭제할 노드 대신에 다음 노드를 가리킨다)
 *
 *
 * 주의사항
 * - 첫 번째 노드가 삭제되는 케이스 고려 -> temp 노드를 추가하여 이를 해결한다.
 *
 * Submit 1: (64 ms, 50.94 MB)
 * Submit 2: (58 ms, 50.94 MB)
 */

function solution(head, n) {
  const queue = []
  const temp = { next: head }
  let current = temp

  // n번째 노드까지 queue에 추가
  for (let i = 0; i < n; i++) {
    queue.push(current)
    current = current.next
  }

  // current가 마지막 노드일 경우
  while (current.next) {
    queue.shift()
    queue.push(current)
    current = current.next
  }

  // 삭제할 노드의 이전 노드를 가져옴
  const prev = queue[0]
  prev.next = prev.next.next

  return temp.next
}

// Todo: 다른 풀이 고민하기
// 1. 불필요하게 temp를 저장하고 있음
// 2. 굳이 queue 배열을 사용하지 않고도 풀 수 있음, 메모리와 성능에 개선 가능성

module.exports = { solution }
