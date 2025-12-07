
Register 
Login 
Dashboard

Register => email password => [{"email":"","password":""},{"email":"","password":""}]
Register => email password => 
Login => email password => 
 token => localstorage
Dashboard

 protected route => localhost:5173/dashboard

/register 
form  image
/login
/dashboard
















# Why We Need Context?

## **Prop Drilling Problem**

Prop drilling happens when you pass data from **Parent → Child → Grandchild → Great-Grandchild**,
even though only the deepest component needs the data.

### Example:

```
App
 └─ Parent
      └─ Child
           └─ GrandChild (needs "username")

```

- This is hard to maintain.
- Breaks when the component tree grows.
- Causes unnecessary re-renders.

---

## What is Context API?

**Context API allows you to share data across the entire component tree
without passing props manually at every level.**

It:

- Removes prop drilling
- Centralizes shared state (theme, user, cart, language, settings, etc.)
