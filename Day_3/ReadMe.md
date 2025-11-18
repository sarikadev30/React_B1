## LifeCycle in React

Birth => Grow => Death

Mounting => Updating => Unmounting

We can see the phases of Lifecycle using Useffect Hook

```
 useEffect(callBackFunction, dependency)
```

Dependency Array => missing => Useffect runs on every render
Dependency Array => empty => Useeffect runs only once when component rendered first time
Dependeny Array => have values => Useffect runs every time when the values are updating

## Container Component vs Presentational Component

### Container Component

- concerned with how things works
- handles the state, data fetching, logic
- Pass data down to the Presentational Component

### Presentational Component

- concerned with how thing look.
- Usually receive props and rendering ui.
- rarely have the state
- button, cards, header

## Composition vs Inheritance

```
    class Animal{

        makeSound(){
            console.log("voice")
        }
    }

    class Dog extends Animal{
            makesound(){
                console.log("wow... wow....")
            }
    }

```

### Why we prefer composition over inheritance ?

- Flexibility:
    <Footer/>
    <Header/>
- Reusability:
- Clarity:
- Functional:

## React Fragments and Portals

### Portal
