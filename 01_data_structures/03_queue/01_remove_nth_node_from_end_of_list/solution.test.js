const { solution } = require('./solution')

const listNode = (val = 0, next = null) => ({ val, next })

const testCases = [
  {
    head: listNode(1, listNode(2, listNode(3, listNode(4, listNode(5))))),
    n: 2,
    expected: listNode(1, listNode(2, listNode(3, listNode(5)))),
  },
  { head: listNode(1), n: 1, expected: null },
  { head: listNode(1, listNode(2)), n: 1, expected: listNode(1) },
]

describe('Solution Tests', () => {
  testCases.forEach(({ head, n, expected }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(solution(head, n)).toEqual(expected)
    })
  })
})
