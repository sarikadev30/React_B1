# useMemo() Hook

memoize the result of expensive calculation so react doesnot recompute it on every render

# useCallback() Hook

memoize the function so react doesnot recreate it on every render

# React.Memo() Hook

# Redux

- Predictable State management library for JS Apps
- It centralises the app's state in a single store => Single source of truth
- Useful for medium to larger apps

## Why Redux ?

- Problem 1 => Prop drilling
- Problem 2 => Shared state across the components

## Redux Core Concepts

### Store

- Single Object that holds all the application state
- Ex: = Counter App Todo App

```
    {
        count:0
        todo:{title:"", iscompleted:false}

    }
```

### Action

- A plain objects describes what happened
- Must have a "type" property
- can have "payload" property

```
  {
    type:"INCREMENT"
  }

  {
    type:"ADD_TODO"
    payload:{title:"Learning Tables"}
  }
```

### Reducer

- Pure function that takes the current state and an action => returns a new state

  ```
      function add(a,b){
          return a+b
      }
      add(4,5)

  ```

### Dispatch

- The way to send an Action to the store

### Selector

- Access the state from the store

## Redux Flow

```

 UI Component => dispatch(action)=> reducer(currentState, action) => newState => UI re-render

```
