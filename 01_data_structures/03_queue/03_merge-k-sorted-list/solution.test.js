const { ListNode } = require('../../../utils/linked_list')
const { solution } = require('./solution')

const testCases = [
  {
    input: [
      ListNode(1, ListNode(4, ListNode(5))),
      ListNode(1, ListNode(3, ListNode(4))),
      ListNode(2, ListNode(6)),
    ],
    expected: ListNode(
      1,
      ListNode(
        1,
        ListNode(
          2,
          ListNode(3, ListNode(4, ListNode(4, ListNode(5, ListNode(6))))),
        ),
      ),
    ),
  },
  {
    input: [],
    expected: null,
  },
  {
    input: [null],
    expected: null,
  },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, expected }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(solution(input)).toEqual(expected)
    })
  })
})
