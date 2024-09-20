const { solution } = require('./solution')

const treeNode = (val = 0, left = null, right = null) => ({ val, left, right })

const testCases = [
  {
    p: treeNode(1, treeNode(2), treeNode(3)),
    q: treeNode(1, treeNode(2), treeNode(3)),
    expected: true,
  },
  {
    p: treeNode(1, treeNode(2), null),
    q: treeNode(1, null, treeNode(2)),
    expected: false,
  },
  {
    p: treeNode(1, treeNode(2), treeNode(1)),
    q: treeNode(1, treeNode(1), treeNode(2)),
    expected: false,
  },
]

describe(`Solution Tests`, () => {
  testCases.forEach(({ p, q, expected }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(solution(p, q)).toEqual(expected)
    })
  })
})
