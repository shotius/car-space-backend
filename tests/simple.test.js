const {__test__ } = require('../src/utils/constants')

describe("Sample test", () => {
  it ('Should test that true === true', () => {
  
    console.log('is testing', __test__)
    expect(true).toBe(true)
  })
})