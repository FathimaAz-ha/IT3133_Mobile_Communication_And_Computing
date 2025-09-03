# React Learning – Day 3

## 📅 Day 3 Progress
On the second day of my React learning journey, I focused on building a **webpage layout** using multiple components and explored **props** to pass data between them.

---

## ✅ What I built
- **Header** component (with a Logo inside, styled using inline CSS).
- **Body** component (content styled with external CSS).
- **Footer** component (styled using variable-based internal CSS).
- **StudentInfo** component (to display student details dynamically using props).
- Integrated everything inside `index.js` to render the full page.

---

## 🔑 Understanding Props
**Props** (short for *properties*) are used to pass data from a parent component to a child component in React.  

- Props are **read-only**.  
- They make components **dynamic and reusable**.  
- You can pass **strings, numbers, or even objects** as props.  

### Example:
```jsx
// Passing props in index.js
<Header content="Welcome!" value="React World" />

// Using props inside Header.js
<h1>{props.content}</h1>
<h2>{props.value}</h2>

// index.js
const Student = { type: "Azha", age: 24 };
<StudentInfo student={Student} />

// StudentInfo.js
<p>Name: {props.student.type}</p>
<p>Age: {props.student.age}</p>
