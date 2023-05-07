const filterByTerm = require('../src/filterByTerm')

describe('Filter function', () => {
  test('it should filter by a search term (link)', () => {
    //1. Define input
    const input = [
      {id: 1, url: 'https://www.url1.dev'},
      {id: 2, url: 'https://www.url2.dev'},
      {id: 3, url: 'https://www.link3.dev'},
    ]

    //2. Define expected result
    const output = [{id: 3, url: 'https://www.link3.dev'}]

    //3. Use  expect() for checking the result and use toEqual() to check that the result is what you expect.
    expect(filterByTerm(input, 'link')).toEqual(output)

    expect(filterByTerm(input, 'LINK')).toEqual(output)
  })

  test('it should filter by a search term (uRl)', () => {
    const input = [
      {id: 1, url: 'https://www.url1.dev'},
      {id: 2, url: 'https://www.url2.dev'},
      {id: 3, url: 'https://www.link3.dev'},
    ]

    const output = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" }
    ]

    expect(filterByTerm(input, 'uRl')).toEqual(output)
  })

  test('it should throw when searchTerm is an empty string', () => {
    const input = []
    
    expect(() => filterByTerm(input, '')).toThrowError(Error('searchTerm cannot be empty'))
  })
})