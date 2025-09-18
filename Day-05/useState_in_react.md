# Introduction to React Hooks and useState

React **Hooks** are functions that let you "hook into" React state and lifecycle features from function components.  
The most commonly used hook is **useState**, which allows you to add state variables to functional components.

---

## useState Hook
- `useState` lets you create state variables in a functional component.
- It returns an **array** with two elements:
  1. The current state value.
  2. A function to update that value.

Example syntax:
```javascript
const [state, setState] = useState(initialValue);
```

---

## Explanation of useState in the Code - codes are updated in the day-04/charts/components/studentDetails.js

1. **Greeting Message (`greet`)**
   - Declared as:  
     ```javascript
     const [greet, setGreet] = useState("Hello React!");
     ```
   - Starts with `"Hello React!"`.
   - Clicking **Change Heading** updates it to `"Hello to React world!"`.

2. **Counter (`count`)**
   - Declared as:  
     ```javascript
     let [count, setCount] = useState(1);
     ```
   - Starts with `1`.
   - **Increase button** increments the count by 1.
   - **Decrease button** decrements the count by 1.

3. **Color (`color`)**
   - Declared as:  
     ```javascript
     let [color, setColor] = useState("coral");
     ```
   - Initially `"coral"`.
   - Button updates the text color to `"Red"` and changes greeting to `"Hey!"`.


---

## Key Points About useState
- Each call to `useState` creates **independent state variables** (`greet`, `count`, `color`).
- Updating state causes the component to **re-render** with the new values.
- State is **preserved** between re-renders, unlike regular variables.

---

✅ With Hooks like `useState`, function components in React can manage their own state without needing class components.
