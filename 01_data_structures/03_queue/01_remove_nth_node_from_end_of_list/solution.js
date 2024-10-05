// 문제 링크: https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

/**
 * Solution: queue 배열을 사용하여 Two-pointer로 해결하기
 *
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

function solution1(head, n) {
  const queue = []
  const fakeHead = { next: head }
  let current = fakeHead

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

  return fakeHead.next
}

/**
 * Solution: queue 배열을 사용하지 않고 Two-pointer로 해결하기
 *
 * 접근법
 * 1. 두 개의 포인터를 사용하여 리스트를 한 번 순회하는 방식으로 문제를 해결한다.
 * 2. fast 포인터는 n만큼 앞서 이동하게 하고,
 * 3. slow 포인터는 fast가 마지막에 도달할 때까지 함께 움직이도록 한다.
 * 4. slow가 삭제할 노드의 직전 노드를 가리키게 한다.
 * 5. slow.next = slow.next.next로 삭제한다.
 *
 * head: 1 -> 2 -> 3 -> 4 -> 5
 * n: 2
 *
 * [Step 1] fast 포인터를 먼저 n = 2만큼 이동시킨다.
 *
 * 첫 번째 루프 (i = 0): fast는 2 노드로 이동한다.
 * - fast: [1 -> 2 -> 3 -> 4 -> 5]
 * - slow: { next: [1 -> 2 -> 3 -> 4 -> 5] }
 *
 * 두 번째 루프 (i = 1): fast는 2 노드로 이동한다.
 * - fast: [2 -> 3 -> 4 -> 5]
 * - slow: { next: [1 -> 2 -> 3 -> 4 -> 5] }
 *
 * [Step 2] fast가 끝까지 이동할 때까지 slow와 함께 이동시킨다.
 *
 * 첫 번째 루프: fast는 3으로, slow는 1로 이동한다.
 * - fast: [3 -> 4 -> 5]
 * - slow: [1 -> 2 -> 3 -> 4 -> 5]
 *
 * 두 번째 루프: fast는 4로, slow는 2로 이동한다.
 * - fast: [4 -> 5]
 * - slow: [2 -> 3 -> 4 -> 5]
 *
 * 세 번째 루프: fast는 5로, slow는 3으로 이동한다.
 * - fast: [5]
 * - slow: [3 -> 4 -> 5]
 *
 * [Step 3] 노드 삭제
 *
 * - fast가 마지막 노드에 도달했고
 * - slow는 삭제할 노드의 직전 노드를 가리키고 있으므로
 * - slow.next = slow.next.next로 삭제한다.
 *
 * Submit 1: (49 ms, 50.66 MB)
 * Submit 2: (50 ms, 51.65 MB)
 *
 * queue 배열을 사용하지 않고 Two-pointer로 해결한 방법이 더 빠르지만 메모리를 적게 사용하진 않았다.
 */

function solution2(head, n) {
  // fakeHead 노드를 활용해, 첫 번째 노드 삭제를 대비
  const fakeHead = { next: head }
  let fast = fakeHead
  let slow = fakeHead

  // fast 포인터를 n만큼 이동
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  // fast가 마지막 노드에 도달할 때까지 slow와 함께 이동
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  // slow의 다음 노드를 삭제
  slow.next = slow.next.next

  // head의 변경된 상태 반환
  return fakeHead.next
}

module.exports = { solution1, solution2 }
