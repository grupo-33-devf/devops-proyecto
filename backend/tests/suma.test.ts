const sum = (a: number, b: number) => {
  return a + b
}

describe('Sum function test', () => {
  test('Sum positive with positive', () => {
    expect(sum(4, 5)).toBe(9)
  })

  test('Sum negative with negative', () => {
    expect(sum(-1, -2)).toBe(-3)
  })
})
