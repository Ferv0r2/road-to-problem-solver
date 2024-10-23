// ListNode를 위한 헬퍼 함수
const ListNode = (val, next = null) => ({ val, next })

// 배열을 ListNode로 변환하는 헬퍼 함수
const arrayToList = (arr) => {
  if (arr.length === 0) return null
  const head = ListNode(arr[0])
  let current = head
  for (let i = 1; i < arr.length; i++) {
    current.next = ListNode(arr[i])
    current = current.next
  }
  return head
}

const listToArray = (list) => {
  const result = []
  let current = list
  while (current) {
    result.push(current.val)
    current = current.next
  }
  return result
}

module.exports = { ListNode, arrayToList, listToArray }
