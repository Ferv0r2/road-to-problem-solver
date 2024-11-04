const { solution } = require('./solution')

const testCases = [
  { input: { s: 'anagram', t: 'nagaram' }, expected: true },
  { input: { s: 'rat', t: 'car' }, expected: false },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, expected }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(solution(input.s, input.t)).toEqual(expected)
    })
  })
})
