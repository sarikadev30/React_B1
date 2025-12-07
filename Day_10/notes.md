# Context API

- built-in state management system in React
  - used to store and share data across the different components
  - without passing props manually at every level

A=> B =>C => D

Cons of prop drilling:

- Hard to maintain
- Hard to debug
- Unnecessary prop passing

Steps to follow for Context API:

1. Create the Context
2. A provider stores the shared data
3. Wrap the whole app with this provider
4. All components can consume/subscribe to this context
   Note => If provider value changes => All consumers re-render

Theme
Authentication
Cart-Data


## Use Memo 
A => B

const memoizedValue = useMemo(()=>{
    calculation
},[dependencies])