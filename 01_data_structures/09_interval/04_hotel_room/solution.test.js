const { solution } = require('./solution')

const testCases = [
  {
    input: [
      ['15:00', '17:00'],
      ['16:40', '18:20'],
      ['14:20', '15:20'],
      ['14:10', '19:20'],
      ['18:20', '21:20'],
    ],
    output: 3,
  },
  {
    input: [
      ['09:10', '10:10'],
      ['10:20', '12:20'],
    ],
    output: 1,
  },
  {
    input: [
      ['10:20', '12:30'],
      ['10:20', '12:30'],
      ['10:20', '12:30'],
    ],
    output: 3,
  },
]

describe('Solution Tests', () => {
  testCases.forEach(({ input, output }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(solution(input)).toEqual(output)
    })
  })
})
