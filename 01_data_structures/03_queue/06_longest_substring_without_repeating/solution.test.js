const { solution, ListNode } = require('./solution')

const testCases = [
  {
    input: 'abcabcbb',
    expected: 3,
  },
  {
    input: 'bbbbb',
    expected: 1,
  },
  {
    input: 'pwwkew',
    expected: 3,
  },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, expected }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(solution(input, n)).toEqual(expected)
    })
  })
})
