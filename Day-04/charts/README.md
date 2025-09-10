# React Learning – Day 4

## 📅 Day 4 Progress
On Day 4, I learned how to work with **JSON data** in React and display it dynamically using **components**.  
I created a dataset of students in `App.js` and passed it to child components for rendering in a table format.

---

## ✅ What I built
- A **JSON array** (`students`) defined in `App.js` containing student details.
- **StudentDetails** component → accepts the student array as props and displays it in a table.
- **Student** component → renders each student record as a table row.
- Used `map()` to loop through the array and generate table rows dynamically.

---

## 🔑 Working with JSON Data in React
- JSON objects can be stored as arrays in React.  
- These arrays can be passed as **props** to components.  
- Inside child components, we can use `.map()` to iterate and display the data.  
