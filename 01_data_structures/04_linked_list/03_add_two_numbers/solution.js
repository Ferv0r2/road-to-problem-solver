// 문제 링크: https://leetcode.com/problems/add-two-numbers/

/**
 * 접근법
 * - 두 링크드 리스트의 각 노드를 순회하면서 합을 구한다.
 * - 합이 10 이상이면 다음 노드에 1을 더해준다.
 * - 두 링크드 리스트 중 하나가 null이면 다른 링크드 리스트의 노드만 순회한다.
 * - 두 링크드 리스트 모두 null이 되면 순회를 멈추고 결과를 반환한다.
 *
 * 테스트 1 〉 통과 (5ms, 57.41MB)
 * 테스트 2 〉 통과 (2ms, 56.12MB)
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function solution(l1, l2) {
  let fakeHead = { next: null }
  let current = fakeHead
  let carry = 0

  while (l1 || l2 || carry) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry

    // 합의 십의 자리를 carry에 저장한다.
    carry = Math.floor(sum / 10)

    current.next = { val: sum % 10, next: null }
    current = current.next

    // null이 아니면 다음 노드로 이동한다.
    l1 = l1?.next
    l2 = l2?.next
  }

  return fakeHead.next
}

module.exports = { solution }
