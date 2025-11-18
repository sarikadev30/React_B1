## lazy loading

### Benefits

- Faster **initial page load**
- Smaller bundle size
- Better **user experience** (loading only when needed)

## Controlled Components

## Uncontrolled Components

### UseRef Hook

returns a mutable object with a `.current` property

### Drawbacks of Uncontrolled

- Hard to validate while typing (since React doesn’t know the value until you fetch it).
- Harder to synchronize input values with other React components.
- Not as predictable or testable as controlled components.

## What is Validation?

- **Definition:**
  Validation is the process of **checking user input** before accepting it.
- **Types:**
  1. **Client-side validation** → happens in the browser (React).
  2. **Server-side validation** → happens on the backend (Node, etc.).
- **Why we need it:**
  - Prevents incorrect/empty data (e.g., missing email).
  - Improves user experience (instant feedback).
  - Increases security (avoid invalid/malicious inputs).

### HTML Built In Validation

```
<input  required/>
```

### Single Field

### Multiple Field

## CSS basics

- External CSS file (traditional)
- Inline CSS => 2 ways
- module CSS
- styled component
