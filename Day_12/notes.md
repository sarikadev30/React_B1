# Testing

## Types of Testing

- Unit Testing => single Compnent/ function
  - Button Rendering
- Integration Testing => components working together
  - Form Submitting
- Snapshot Testing => UI structure
  - Layout Changes
- E2E Testing (End to End Testing) => Full App
  - Login Flow (Cypress Testing / Playwright testing)
  - Navigation Flow

## JEST

- Javascript Testing Framework
- Used it with React, NodeJs, Typescript
- Used for Unit and Integration testing

```
 function addVal(a,b){
    return a+b
 }

 test("adds two number",()=>{
    expect(addVal(2,3)).toBe(5)
 })

 test("one parameter is missing",()=>{
    expect(addVal(,4)).toBe()
 })

```

- test() => Define a testcase
- describe() => groups related tests
- expect() => Assertion
- beforeEach() => runs Before each test case
- afterEach() => cleanup
- jest.fn() => mock functions

### JEST + RTL

Jest → runs tests + checks results
RTL → tests React UI like a user

```
npm install -D jest jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom @testing-library/user-event
```

- jest =>
- jsdom => fake browser for Node
- @testing-library/react => React Component Rendering
- @testing-library/dom => core DOM query
- @testing-library/jest-dom =>
- @testing-library/user-event

jest.config.js
