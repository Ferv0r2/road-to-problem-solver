// 문제 링크: https://leetcode.com/problems/merge-k-sorted-lists/description/

/**
 * 접근법
 * - 기본 ListNode head를 선언한다.
 * - 각 리스트의 값을 큐에 넣고 정렬한 후, 큐에서 값을 꺼내어 배열에 담아 반환한다.
 * - 큐를 정렬한다.
 * - 1번 문제와 동일하게 ListNode를 사용하여 연결 리스트를 구현한다.
 *
 * 주의사항
 * - 큐를 정렬할 때, sort() 메서드를 사용한다.
 *   - 이 때, sort()만 호출하면 ascii 코드 순서로 정렬되므로, 숫자로 정렬하려면 비교 함수를 추가해야 한다.
 *
 * Submit 1: (86 ms, 56.19 MB)
 * Submit 2: (91 ms, 57.44 MB)
 */

function ListNode(val = 0, next = null) {
  return { val, next }
}

function solution(lists) {
  const queue = []
  const head = ListNode()
  let current = head

  // 1차원 배열 형태로 변환
  for (let item of lists) {
    while (item) {
      queue.push(item.val)
      item = item.next
    }
  }

  queue.sort((a, b) => a - b)

  // 연결 리스트 구현
  for (let item of queue) {
    current.next = ListNode(item)
    current = current.next
  }

  return head.next
}

// Todo: 우선 순위 큐 파헤치기
// - 이 문제가 원하는 구조로 작성하지 않은 것 같음

module.exports = { solution, ListNode }
